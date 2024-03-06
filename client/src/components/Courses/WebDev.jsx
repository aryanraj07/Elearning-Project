import React from "react";
import Course from "./Course";

const WebDev = () => {
  return (
    <div className="h-scren dark:bg-gray-900">
      <div className="flex flex-wrap justify-evenly gap-40">
        <Course imglink="./html.png" title="Html" />
        <Course imglink="./css.png" title="Css" />
        <Course imglink="./js.png" title="JavaScript" />
        <Course imglink="./css.png" title="" />
        <Course imglink="./react.png" title="React" />
      </div>
    </div>
  );
};

export default WebDev;
