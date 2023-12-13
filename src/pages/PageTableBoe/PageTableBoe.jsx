import React, { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import ExportCsv from "@material-table/exporters/csv";
import ExportPdf from "@material-table/exporters/pdf";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import HtmlOutlinedIcon from "@mui/icons-material/HtmlOutlined";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { getBoe } from "../../api/boe";
import { checkResumeExists } from "../../api/storage";

import BoeActions from "../../components/TableColumns/BoeActions";
import TableBoe from "../../components/TableBoe/TableBoe";

import "./PageTableBoe.scss";

const PageTableBoe = () => {
  const [date, setDate] = useState(dayjs(new Date()));
  const [data, setData] = useState([]);

  const debouncedDate = useDebounce(date, 500);

  useEffect(() => {
    getData();
  }, [debouncedDate]);

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const genDate = date => {
    const day = zeroPad(date.date(), 2);
    const month = zeroPad(date.month() + 1, 2);
    const year = date.year();

    return `${year}${month}${day}`;
  };

  const getData = async () => {
    const df = await getBoe(genDate(debouncedDate));

    const dfProcessed = df.data.map(
      ([
        fecha,
        scNum,
        scNombre,
        dpNombre,
        dpEtq,
        epNombre,
        itId,
        itControl,
        itTitulo,
        itUrlPdf,
        itUrlHtml,
        itUrlXml
      ]) => ({
        fecha,
        scNum,
        scNombre,
        dpNombre,
        dpEtq,
        epNombre,
        itId,
        itControl,
        itTitulo,
        itUrlPdf,
        itUrlHtml,
        itUrlXml
      })
    );

    setData(dfProcessed);
  };

  const columns = [
    {
      title: "Fecha",
      field: "fecha",
      headerStyle: {
        maxWidth: "100px"
      }
    },
    { title: "Sección Nº", field: "scNum", hidden: true },
    { title: "Sección", field: "scNombre", hidden: true },
    { title: "Departamento", field: "dpNombre", hidden: true },
    { title: "Etq", field: "dpEtq", type: "numeric", hidden: true },
    { title: "Epígrafe", field: "epNombre", hidden: true },
    { title: "Item", field: "itId", hidden: true },
    { title: "Control", field: "itControl", hidden: true },
    { title: "Título", field: "itTitulo" },
    {
      title: "Acciones",
      render: rowData => {
        const actionColumns = [
          {
            href: `https://www.boe.es${rowData.itUrlPdf}`,
            icon: <PictureAsPdfOutlinedIcon />
          },
          {
            href: `https://www.boe.es${rowData.itUrlHtml}`,
            icon: <HtmlOutlinedIcon />
          },
          checkResumeExists("boeResumes", rowData.itId) && {
            icon: <AssignmentReturnedIcon />
          }
        ];
        return <BoeActions iconsList={actionColumns} />;
      }
    }
  ];

  const optionsTable = {
    pageSize: 20,
    pageSizeOptions: [5, 10, 20, 50],
    exportMenu: [
      {
        label: "Exportar PDF",
        exportFunc: (cols, datas) => ExportPdf(cols, datas, "myPdfFileName")
      },
      {
        label: "Exportar CSV",
        exportFunc: (cols, datas) =>
          ExportCsv(cols, datas, "myCsvFileName", "|")
      }
    ]
  };

  return (
    <>
      <div className="pagetableboe-dateselector" data-cy="selector">
        <DatePicker
          label="Fecha"
          value={date}
          onChange={newValue => {
            setDate(newValue);
          }}
        />
      </div>
      <TableBoe
        title={"Disposiciones y anuncios"}
        columns={columns}
        data={data}
        options={optionsTable}
        dataTestId="boe-table"
      />
    </>
  );
};

export default PageTableBoe;
