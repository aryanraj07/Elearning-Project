import { Button } from "../../../components/ui/button";
import React from "react";

const Course = ({ imglink, title }) => {
  return (
    <>
      <div className="bg-indigo-50 w-60 h-70 rounded-xl shadow-lg outline-none p-3 dark:bg-slate-700">
        <div className="flex flex-col gap-5">
          {" "}
          <img className=" h-40" src={imglink} alt="" />
          <div className="border-b-4 border-yellow-400"></div>
          <h1 className="text-2xl bg-slate-100 text-purple-800 font-semibold">
            {title}
          </h1>
          <div className="flex gap-20">
            <Button>Explore</Button>
            <Button variant="destructive">Join</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
