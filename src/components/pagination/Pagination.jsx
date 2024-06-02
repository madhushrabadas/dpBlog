import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-5">
      <button className="bg-rose-800 text-white px-8 py-3 rounded-lg">
        prev
      </button>
      <button className="bg-rose-800 text-white px-8 py-3 rounded-lg">
        next
      </button>
    </div>
  );
};

export default Pagination;
