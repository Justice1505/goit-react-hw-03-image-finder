import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";
const Button = ({ getPhoto }) => {
  return (
    <button type="button" onClick={getPhoto} className={s.Button}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  getPhoto: PropTypes.func.isRequired,
};
