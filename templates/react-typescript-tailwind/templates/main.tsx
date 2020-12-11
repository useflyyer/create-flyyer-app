import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

function Layer({ className, ...props}: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }: TemplateProps) {
  const {
    title = "Hello world!",
    img = background,
    description,
  } = variables;

  return (
    <>
      <Layer>
        <img className="w-full h-full object-cover" src={img} />
      </Layer>
      <Layer className="bg-gradient-to-t from-gray-500 mt-64" />
      <Layer className="flex flex-col justify-end items-start px-12 py-12 text-white">
        <img src={logo} className={classNames("filter-white" /* custom */, "w-36 h-36")} />
        <h1 className="text-6xl mt-4">{title}</h1>
        {description && (
          <h2 className="text-4xl font-mono tracking-wider mt-2">{description}</h2>
        )}
      </Layer>
    </>
  );
}
