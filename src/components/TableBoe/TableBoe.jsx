import React from "react";
import PropTypes from "prop-types";

import MaterialTable from "@material-table/core";

import DetailBoePanel from "../../components/DetailBoePanel";

import "./TableBoe.scss";

const TableBoe = props => {
  const { title, data, columns, options, dataTestId } = props;

  const localization = {
    body: {
      emptyDataSourceMessage: "Sin datos"
    },
    pagination: {
      firstTooltip: "Primera página",
      previousTooltip: "Página anterior",
      nextTooltip: "Página siguiente",
      lastTooltip: "Última página",
      labelRowsPerPage: "Filas por página:",
      labelRows: "Filas",
      labelDisplayedRows: "{from}-{to} de {count}"
    },
    toolbar: {
      exportTitle: "Exportar",
      searchTooltip: "Buscar",
      searchPlaceholder: "Buscar"
    }
  };

  return (
    <>
      <div className="tableboe" data-testid={dataTestId} data-cy="table">
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          options={options}
          localization={localization}
          detailPanel={({ rowData }) => {
            return <DetailBoePanel data={rowData} />;
          }}
        />
      </div>
    </>
  );
};

TableBoe.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  options: PropTypes.object,
  dataTestId: PropTypes.string
};

export default TableBoe;
