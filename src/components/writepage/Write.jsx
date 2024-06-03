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
    <div className=" p-4 min-h-[80vh] bg-pink-100 px-20">
      <div className="title  my-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-rose-800 p-2"
        />
      </div>
      <div className="buttoncomps ">
        <button onClick={openMenus} className="p-2 my-4 border border-rose-800">
          +
        </button>
        {openPlus && <>hey</>}
      </div>
      <div className="h-fit bg-yellow-400">
        <ReactQuill
          className="bg-white text-rose-800 h-full text-2xl"
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <div className="mt-6 mb-12">
        <button
          onClick={handleSubmit}
          className="bg-green-50  text-rose-800 p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Write;
