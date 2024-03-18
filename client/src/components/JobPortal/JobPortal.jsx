import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../../components/ui/button";
const JobPortal = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl font-bold">Lets find your </h1>
          <h1 className="text-5xl font-bold">
            {" "}
            dream <span className="text-indigo-900">job</span> with{" "}
            <span className="text-indigo-900">Elearing360</span>
          </h1>
        </div>
        <div className="relative flex gap-3  ">
          <span className="absolute top-6">
            <IoIosSearch />
          </span>
          <div>
            <input
              type="text"
              placeholder="Job Title"
              className="p-4 outline-none "
            />
          </div>
          <div className="flex gap-5">
            <span className="relative top-4">|</span>
            <span className="relative top-5">
              <CiLocationOn />
            </span>
            <input
              type="text"
              placeholder="Location"
              className="p-4 outline-none "
            />
            <Button variant="destructive" className="relative top-5 ">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
