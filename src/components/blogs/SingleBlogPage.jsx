import React from "react";
import SideMenu from "../sidemenu/Sidemenu";
import Comments from "./Comments";

const SingleBlogPage = () => {
  return (
    <div className=" p-4 px-20">
      <div className="top flex">
        <div className="left flex-1 ">
          <div className="title">title</div>
          <div className="author">author</div>
          <div className="date">date</div>
        </div>
        <div className="right bg-rose-700 h-[50%]  flex-1  ">img</div>
      </div>
      <div className="  flex justify-between">
        <div className="leftpara h-fit bg- pink-400">
          <div className="para py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            sapiente non. Libero iste non, tempora dolorum maxime temporibus nam
            nobis voluptatem vel. Impedit facere, tempora reiciendis dolor odit
            laborum inventore et eveniet aperiam, atque quam at non qui,
            recusandae numquam? Quis quibusdam, recusandae et alias assumenda
            molestiae iure, est maiores repellat ratione dolorum atque.
            Obcaecati.
          </div>
          <Comments />
        </div>
        <div className="right w-full">
          <SideMenu dataToShow={2} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
