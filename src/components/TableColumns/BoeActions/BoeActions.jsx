import React from "react";
import PropTypes from "prop-types";

import "./BoeActions.scss";

const BoeActions = props => {
  const { iconsList } = props;

  return (
    <div>
      <ul className="ls-ul">
        {iconsList.map((el, idx) => {
          return (
            <li key={idx}>
              <div className="li-block">
                <a href={el.href} target="_blank" rel="noreferrer">
                  {el.icon}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

BoeActions.propTypes = {
  iconsList: PropTypes.array
};

export default BoeActions;
