import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import ExportCsv from "@material-table/exporters/csv";
import ExportPdf from "@material-table/exporters/pdf";

import getBoe from "../../api/boe";

import "./PageTableBoe.scss";

const PageTableBoe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const df = await getBoe();

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

    getData();
  }, []);

  const lookup = { true: "Available", false: "Unavailable" };

  const columns = [
    { title: "fecha", field: "fecha" },
    { title: "scNum", field: "scNum" },
    { title: "scNombre", field: "scNombre", type: "numeric" },
    { title: "dpNombre", field: "dpNombre", lookup },
    { title: "dpEtq", field: "dpEtq" },
    { title: "epNombre", field: "epNombre" },
    { title: "itId", field: "itId" },
    { title: "itControl", field: "itControl" },
    { title: "itTitulo", field: "itTitulo" },
    { title: "itUrlPdf", field: "itUrlPdf" },
    { title: "itUrlHtml", field: "itUrlHtml" },
    { title: "itUrlXml", field: "itUrlXml" }
  ];

  const optionsTable = {
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
        <MaterialTable columns={columns} data={data} options={optionsTable} />
      </div>
    </>
  );
};

export default PageTableBoe;
