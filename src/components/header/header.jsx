import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {

  handleClick = () => {
    console.log("enter ");

    let wrapper = document.querySelector(".popup__wrapper");
    let popup = document.querySelector(".popup");

    console.log(wrapper + " " + popup);

    wrapper.classList.add('popup__wrapper--clicked');
    popup.classList.add('popup__clicked--down');

  }

  handlePopupClick = () =>{
    let wrapper = document.querySelector(".popup__wrapper");
    let popup = document.querySelector(".popup");

    wrapper.classList.remove('popup__wrapper--clicked');
    popup.classList.remove('popup__clicked--down');
    popup.classList.add('popup__clicked--up');
  }

  handleEnter = () => {
    console.log("enter-form");
  }

  render() {
    return (
      <header className="header">
        <a href="#" onClick={this.handleClick} className="header__btn header__btn--styl">Войти</a>

        <div className="popup__wrapper" onClick={this.handlePopupClick}></div>
        <div className="popup">
          <h2 className="App__heading App__heading--center">Войти или не стоит?</h2>
          <form onSubmit={this.handleEnter}>
            <div className="form-group">
              <input className="form-control" name="login" type="text" placeholder="введите логин"/>
            </div>
            <div className="form-group">
              <input className="form-control" name="pass" type="password" placeholder="введите пароль"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">Войти в Айти</button>
            </div>
          </form>
        </div>
        

      </header>
    );
  }
}
