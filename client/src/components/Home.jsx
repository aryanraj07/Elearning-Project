import React, { useEffect, useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { FcStatistics } from "react-icons/fc";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const words = ["learning", "collaborating", "communicating"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    typingIntervalRef.current = setInterval(() => {
      const word = words[currentWordIndex];
      if (currentLetterIndex < word.length) {
        setTypedText(
          (prevTypedText) => prevTypedText + word[currentLetterIndex]
        );
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setCurrentLetterIndex(0);
        setTypedText("");
      }
    }, 150); // Typing speed: 100 milliseconds

    return () => clearInterval(typingIntervalRef.current);
  }, [currentWordIndex, currentLetterIndex]);

  useEffect(() => {
    return () => clearInterval(typingIntervalRef.current);
  }, []);
  return (
    <div className="h-screen dark:bg-zinc-950">
      <div className="flex mt-6 gap-20 items-center justify-evenly">
        <div className="flex flex-col h-100  ml-5 ">
          <div className="heading text-4xl font-semibold ">
            An integrated platform for
          </div>
          <span className="text-5xl text-red-500 font-extrabold w-96">
            {"<"}
            {typedText}
            {"|"}
            {">"}
          </span>
          <h2 className="mt-6 text-2xl font-semibold ">
            Aiming to serve as a centralized hub, offering diverse courses,
            real-time doubt resolution, and collaborative learning.
          </h2>
          <div className="flex justify-start mt-20">
            <Button variant="destructive">Explore Courses</Button>
          </div>
        </div>
        <div>
          <img
            className="rounded-lg outline-none"
            width={470}
            src="./homeedu.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" mt-20">
        <div
          className="flex justify-evenly
        "
        >
          <div className="flex gap-6 bg-indigo-100 p-5 h-[100px] min-w-[100px]">
            <FcStatistics size={60} />
            <div className="detail flex flex-col gap-3">
              <h1 className="font-extrabold">52%</h1>
              <h2 className="font-semibold">Average Salaray Hike</h2>
            </div>
          </div>
          <div className="flex gap-6 bg-indigo-100 p-2 h-[100px] ">
            <span class="material-symbols-outlined">book_2</span>
            <div className="detail flex flex-col gap-3">
              <h1 className="font-extrabold">30+</h1>
              <h2 font-semibold>Courses</h2>
            </div>
          </div>
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
