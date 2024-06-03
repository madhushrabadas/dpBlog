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
  const categorys = await getData();
  // console.log(categorys);
  return (
    <div className="flex bg-rose-700 p-4 px-40 w-full justify-between gap-6 text-white">
      {categorys.map((i) => (
        <div className="flex cursor-pointer shadow-lg capitalize bg-white text-rose-900/90 p-3 w-full'">
          {" "}
          {i?.title}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
