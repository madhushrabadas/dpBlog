import React from "react";

const SingleCard = ({ title, desc, date, img, categ }) => {
  return (
    <div className="border p-4 my-3 shadow-lg rounded-lg bg-white  w-full ">
      <div className="flex">
        <div className="left flex-1 mr-4 h-[14rem] w-[12rem] ">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="right flex-1">
          <div className="timecat text-gray-500   mb-2">
            {date} - {categ}
          </div>
          <div className="title text-xl font-semibold mb-2">{title}</div>
          <div className="desc text-gray-700  ">{desc}</div>
          <div className="link mt-5 text-blue-500 hover:underline cursor-pointer">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;