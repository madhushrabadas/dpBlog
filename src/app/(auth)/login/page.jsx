"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Loginpage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  console.log(data, status);

  if (status === "loading") {
    return <div>loading .....</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="bg-pink-100  text-white h-[90vh] flex  items-center justify-center ">
      <div
        onClick={() => signIn("google")}
        className="bg-blue-400 p-2 rounded-lg capitalize cursor-pointer"
      >
        login with google
      </div>
    </div>
  );
};

export default Loginpage;
