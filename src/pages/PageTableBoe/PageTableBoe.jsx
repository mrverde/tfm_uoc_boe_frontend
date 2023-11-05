import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import ExportCsv from "@material-table/exporters/csv";
import ExportPdf from "@material-table/exporters/pdf";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import HtmlOutlinedIcon from "@mui/icons-material/HtmlOutlined";

import { getBoe } from "../../api/boe";

import DetailBoePanel from "../../components/DetailBoePanel";

import "./PageTableBoe.scss";

const PageTableBoe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const df = await getBoe("20231103");

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

  const lookup = { true: "Available", false: "Unavailable" };

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
        return (
          <div>
            <ul className="ls-ul">
              <li>
                <div className="li-block">
                  <a
                    href={`https://www.boe.es${rowData.itUrlPdf}`}
                    target="_blank"
                    rel="noreferrer">
                    <PictureAsPdfOutlinedIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="li-block">
                  <a
                    href={`https://www.boe.es${rowData.itUrlHtml}`}
                    target="_blank"
                    rel="noreferrer">
                    <HtmlOutlinedIcon />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        );
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
      <div className="tableboe">
        <MaterialTable
          title="Disposiciones y anuncios"
          columns={columns}
          data={data}
          options={optionsTable}
          detailPanel={({ rowData }) => {
            return <DetailBoePanel data={rowData} />;
          }}
        />
      </div>
    </>
  );
};

export default PageTableBoe;
