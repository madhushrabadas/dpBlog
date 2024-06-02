import React from "react";
import SideMenu from "@/components/sidemenu/Sidemenu";
import Comments from "@/components/blogs/Comments";

const getData = async (slugg) => {
  const res = await fetch(`http://localhost:3000/api/blogposts/${slugg}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SingleBlogPage = async ({ params }) => {
  console.log(params);
  const { slugg } = params;

  const data = await getData(slugg);
  console.log(data);

  return (
    <div className=" p-4 px-20 w-full">
      <div className="top flex">
        <div className="left flex-1 ">
          <div className="title text-2xl font-bold capitalize">
            {data.title}
          </div>
          <div className="author mt-5">{data?.user?.name}</div>
          <div className="date mt-2">{data?.createdAt?.substring(0, 10)}</div>
        </div>
        <div className="right bg-rose-700 h-[50%]  flex-1  ">img</div>
      </div>
      <div className="  flex justify-between">
        <div className="leftpara h-fit bg- pink-400">
          <div className="para py-4">{data.desc}</div>
          <Comments />
        </div>
        <div className="right w-[30%]">
          <SideMenu dataToShow={2} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
