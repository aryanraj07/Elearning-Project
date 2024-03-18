import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const Option = ({ src, btntext, linker }) => {
  return (
    <div>
      <div className="p-4 bg-slate-500 flex flex-col w-[200px] gap-2 items-end rounded-lg dark:bg-blue-900 ">
        <img className="w-40 h-40" src={src} alt="" />
        <div>
          <NavLink to={linker}>
            <Button text={btntext} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Option;
