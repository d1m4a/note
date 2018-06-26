import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#" className="header__btn header__btn--styl">Войти</a>
      </header>
    );
  }
}