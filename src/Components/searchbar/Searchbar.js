import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
class Searchbar extends Component {
  state = {
    find: "",
  };

  handleSearchForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.find);
    this.setState({ find: "" });
  };

  handleInputChange = (e) => {
    this.setState({ find: e.target.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.find}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
