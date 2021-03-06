import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";
const modal = document.querySelector("#modal");
console.log(modal);
class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEsc);
  }

  onEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.onBackdrop}>
        <div className={s.Modal}>
          <img src={this.props.largeImage} alt="#" />
        </div>
      </div>,
      modal
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
