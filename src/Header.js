import React, { PureComponent } from "react";
import "./Header.css";
import configs from "./config";

export default class Header extends PureComponent {
  state = {
    title: "",
  };

  componentDidMount() {
    fetch(`${configs.API_DOMAIN}/api/title`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ title: data?.title });
      });
  }

  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        {this.state.title}
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
