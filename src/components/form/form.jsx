
import React, { Component } from "react";

import "./form.css";

export default class Form extends Component {

  handleSubmit = () => {
    console.log("form ");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="введите заголовок"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="вставьте ссылку"/>
        </div>
        <div className="form-group">
          <select className="form-control" size="1" name="itemName">
            <option value="norm">Реактная</option>
            <option value="mute">Редуска</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Засандалить</button>
        </div>
      </form>
    );
  }
}


