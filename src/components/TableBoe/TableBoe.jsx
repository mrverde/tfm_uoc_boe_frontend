import React from "react";
import PropTypes from "prop-types";

import MaterialTable from "@material-table/core";

import DetailBoePanel from "../../components/DetailBoePanel";

import "./TableBoe.scss";

const TableBoe = props => {
  const { title, data, columns, options } = props;

  return (
    <>
      <div className="tableboe">
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
  columns: PropTypes.object,
  data: PropTypes.object,
  options: PropTypes.object
};

export default TableBoe;
