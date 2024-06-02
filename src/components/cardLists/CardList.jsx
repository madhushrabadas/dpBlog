import React from "react";
import Pagination from "../pagination/Pagination";
import SingleCard from "./SingleCard";

const getData = async (page) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/blogposts?page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("cate issues");
  }
  console.log(res);
  return res.json();
};
const CardList = async ({ page }) => {
  const data = await getData(page);
  // console.log(data);

  return (
    <div className="bg-rose-300 w-full py-4">
      <div>CardList</div>
      <div className="pagination">
        {data.posts.map((item) => (
          <SingleCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            date={item.date}
            img={item.img}
            categ={item.categ}
            slug={item.slug}
          />
        ))}
        <Pagination page={page} />
      </div>
    </div>
  );
};

export default CardList;
