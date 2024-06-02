import React from "react";

const SideItem = ({ title, date, image }) => {
  return (
    <div className="border p-3 my-2 bg-rose-600 text-white flex justify-between gap-4 rounded-lg">
      <div className="img border w-[30%]">img</div>
      <div className="content flex flex-col w-full">
        <div className="date">{date}</div>

        <div className="title text-xl font-bold">{title}</div>
        <div className="link">link</div>
      </div>
    </div>
  );
};

export default SideItem;
