import React from "react";

const SideItem = ({ title, date, image }) => {
  return (
    <div className="border p-3 my-4 bg-white text-rose-800 flex justify-between gap-4 shadow-lg overflow-hidden">
      <div className="img border w-[7rem]">img</div>
      <div className="content flex flex-col w-full">
        <div className="date text-sm">{date}</div>

        <div className="title text-xl font-bold truncate">{title}</div>
        <div className="link">link</div>
      </div>
    </div>
  );
};

export default SideItem;
