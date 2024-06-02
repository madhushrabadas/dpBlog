import Link from "next/link";
import React from "react";

const navData = [
  {
    id: 1,
    name: "About",
    path: "/about",
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "write",
    path: "/write",
  },
  {
    id: 4,
    name: "Blog Page",
    path: "/blog/:slugg",
  },
];

const Nav = () => {
  return (
    <div className="bg-rose-200 text-rose-800 flex justify-between items-center p-4 px-20">
      <Link href={"/"} className="left">
        logo
      </Link>
      <div className="right flex  items-center justify-between gap-3">
        {navData.map((user) => (
          <li key={user.id} className="list-none">
            <a href={user.path}>{user.name}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Nav;
