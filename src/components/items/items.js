import React, { Component } from "react";

import Item from "../item/item";

import "./items.css";

export default class Items extends Component {
  render() {
    return (
      <div className="container-fluid">
      <section className="section">
        <form className="form">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="введите заголовок"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="вставьте ссылку"/>
          </div>
          <div className="form-group">
          <select className="form-control" size="1" name="itemName">
              <option value="norm">Полезняшки</option>
              <option value="mute">Муть</option>
            </select>
          </div>
          <div className="form-group">
          <button className="btn btn-default">Засандалить</button>
          </div>
        </form>
        <div className="row">
          <div className="col-xs-6">
            <div className="section__block section__block--styl">
              <h2 className="section__heading">Полезняшки</h2>
              <Item />
              <Item />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="section__block section__block--styl">
              <h2 className="section__heading">Муть</h2>
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}