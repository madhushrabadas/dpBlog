import React from "react";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("cate issues");
  }
  console.log(res);
  return res.json();
};

const CategoryList = async () => {
  const blogs = await getData();
  console.log(blogs);
  return (
    <div className="flex bg-rose-800 p-4 px-20 w-full justify-between gap-6 text-white">
      {blogs.map((i) => (
        <div className="flex cursor-pointer border rounded-xl bg-rose-100/40 p-3 w-full'">
          {" "}
          {i?.title}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
