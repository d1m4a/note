import React, { Component } from "react";

import "./item.css";

export default class Item extends Component {

  render() {
    return (
      <article className="post">
        <h3 className="post__heading">{this.props.title}</h3>
        <div className="post__content">
          <a className="post__link" target="_blank" href={this.props.link}>Ссылка</a>
        </div>
      </article>
    );
  }
}