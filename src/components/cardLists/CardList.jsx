import React from "react";
import Pagination from "../pagination/Pagination";
import SingleCard from "./SingleCard";

// data.js
const data = [
  {
    id: 1,
    title: "First Blog Post",
    desc: "This is the description of the first blog post.",
    date: "2024-06-01",
    img: "https://via.placeholder.com/150",
    categ: "Technology",
  },
  {
    id: 2,
    title: "Second Blog Post",
    desc: "This is the description of the second blog post.",
    date: "2024-06-02",
    img: "https://via.placeholder.com/150",
    categ: "Lifestyle",
  },
  {
    id: 3,
    title: "Third Blog Post",
    desc: "This is the description of the third blog post.",
    date: "2024-06-03",
    img: "https://via.placeholder.com/150",
    categ: "Technology",
  },
];

const CardList = () => {
  return (
    <div className="bg-rose-300 w-full py-4">
      <div>CardList</div>
      <div className="pagination">
        {data.slice(0, 2).map((item) => (
          <SingleCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            date={item.date}
            img={item.img}
            categ={item.categ}
          />
        ))}
        <Pagination />
      </div>
    </div>
  );
};

export default CardList;
