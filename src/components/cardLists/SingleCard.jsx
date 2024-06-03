import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ title, desc, date, img, categ, slug }) => {
  return (
    <div className="  p-4 my-5 shadow-lg bg-pink-50  w-full ">
      <div className="flex">
        <div className="left flex-1 mr-4 h-[14rem] w-[12rem] ">
          <Image
            width={100}
            height={100}
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="right flex-1">
          <div className="timecat text-rose-800   mb-2">
            {date.substring(0, 10)} -{" "}
            <p className="font-bold capitalize">{categ}</p>
          </div>
          <div className="title text-xl font-semibold mb-2">{title}</div>
          <div className="desc mb-6 text-gray-700  ">
            {desc?.substring(0, 70)}...
          </div>
          <Link
            href={`/blog/${slug}`}
            className="link mt-8 bg-rose-900 text-white p-2 hover:underline cursor-pointer"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
