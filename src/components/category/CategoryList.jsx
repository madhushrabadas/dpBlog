import React from "react";

const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
    category: "Technology",
  },
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
    category: "Technology",
  },
  // Add more blog posts here
];

const CategoryList = () => {
  return (
    <div className="flex bg-rose-600 p-4 px-20 w-full justify-between gap-6 text-white">
      {blogs.map((i) => (
        <div className="flex  border p-3 w-full'"> {i.category}</div>
      ))}
    </div>
  );
};

export default CategoryList;
