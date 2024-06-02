"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div
      className={"bg-rose-900 text-white flex justify-between items-center p-3"}
    >
      <button
        className={"bg-rose-900 text-white"}
        // disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        // disabled={!hasNext}
        className={"bg-rose-900 text-white"}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
