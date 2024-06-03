import React from "react";
import SideItem from "./SideItem";

const data = [
  {
    id: 1,
    title:
      "First Blog dfcfgv hfdghfbdhfchfhb vfhchvfhfbhfch h sr hdfedhxfhcghbdyvhrgfdh",
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

const SideMenu = ({ dataToShow }) => {
  return (
    <div className=" w-full p-4 h-full ">
      <div className="text-xl font-bold text-rose-700">Popular categories</div>
      {data.slice(0, dataToShow).map((item) => (
        <SideItem
          key={item.id}
          title={item.title}
          desc={item.desc}
          date={item.date}
          img={item.img}
          categ={item.categ}
        />
      ))}
    </div>
  );
};

export default SideMenu;
