"use client";
import { signOut, useSession } from "next-auth/react";
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
  const { status } = useSession();
  console.log(status);
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
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span onClick={signOut} className="flex p-2 bg-rose-50">
              Logout
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
