import React from "react";
import "./basePage.css";

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={`base-page content-vin`}>
        <div className={"base-page-header"}>
          {title && <h1 className="page-title">{title}</h1>}
        </div>
        {children}
      </div>
    );
  }
}
