"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const navData = [
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
];

const Nav = () => {
  const { status } = useSession();
  console.log(status);
  return (
    <div className="text-rose-100 bg-rose-800 flex justify-between items-center p-4 px-20">
      <Link href={"/"} className="left italic font-bold text-xl">
        Madhushrabas Blog
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
            <span onClick={signOut} className="flex p-2 text-rose-50">
              Logout
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
