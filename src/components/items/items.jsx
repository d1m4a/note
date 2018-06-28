import React, { Component } from "react";

import Item from "../item/item";
import Form from "../form/form";

import "./items.css";

export default class Items extends Component {

  render() {
    return (
      <div className="container-fluid">
      <section className="section">
        <Form />
        <div className="row">
          <div className="col-xs-6">
            <div className="section__block section__block--styl">
              <h2 className="section__heading">Реактная</h2>
              <Item title="руководство по react 2018" link="https://maxpfrontend.ru/perevody/rukovodstvo-po-react-js-2018/"/>
              <Item title ="по авторизации в react" link="https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md"/>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="section__block section__block--styl">
              <h2 className="section__heading">Редуска</h2>
              <Item title="что то про redux" link="https://toster.ru/q/270962"/>
              <Item title="Getting Started with Redux" link="https://egghead.io/courses/getting-started-with-redux"/>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}