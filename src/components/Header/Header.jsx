import React from "react";
import PropTypes from "prop-types";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Logo from "../Logo";

import "./Header.scss";

const Header = props => {
  const { date, setDate } = props;

  return (
    <header className="header">
      <Logo />
      <div className="pagetableboe-dateselector" data-cy="selector">
        <DatePicker
          label="Fecha"
          value={date}
          onChange={newValue => {
            setDate(newValue);
          }}
          sx={{
            ".MuiFormControl-root": {
              color: "#f8bbd0",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#e91e63",
              border: "1px solid",
              backgroundColor: "#880e4f"
            }
          }}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func
};

export default Header;
