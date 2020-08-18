import React from "react";

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

import "./styles.css"

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }) {
  const {
    title = "Hello world!",
    img = background,
    description,
  } = variables;

  return (
    <div>
      <div className="layer background" style={{ backgroundImage: `url("${img}")` }} />
      <div className="layer fade" />
      <div className="layer content">
        <img className="logo" src={logo} />

        <h1 className="title">
          {title}
        </h1>

        {description && (
          <span className="description">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
