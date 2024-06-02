"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [openPlus, setOpenPlus] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const openMenus = () => {
    setOpenPlus(!openPlus);
  };

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Content:", value);
  };

  return (
    <div className="bg-pink-200 p-4 h-[80vh] px-20">
      <div className="title my-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2"
        />
      </div>
      <div className="buttoncomps bg-sky-300">
        <button onClick={openMenus} className="p-2 m-2 border">
          +
        </button>
        {openPlus && <>hehy</>}
      </div>
      <div className="h-fit bg-yellow-400">
        <ReactQuill
          className="bg-rose-700 text-white h-[12rem] text-2xl"
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <div className="mt-16">
        <button
          onClick={handleSubmit}
          className="bg-green-50 z-50 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Write;
