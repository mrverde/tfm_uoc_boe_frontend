import React from "react";
import PropTypes from "prop-types";

import MaterialTable from "@material-table/core";

import DetailBoePanel from "../../components/DetailBoePanel";

import "./TableBoe.scss";

const TableBoe = props => {
  const { title, data, columns, options, dataTestId } = props;

  return (
    <>
      <div className="tableboe" data-testid={dataTestId} data-cy="table">
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          options={options}
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
