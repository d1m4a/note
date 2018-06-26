import React, { Component } from "react";

import "./item.css";

export default class Item extends Component {
  render() {
    return (
      <article className="post">
        <h3 className="post__heading">stormpath-sdk-react</h3>
        <div className="post__content">
          <a className="post__link" target="_blank" href="https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md">Ссылка</a>
        </div>
      </article>
    );
  }
}