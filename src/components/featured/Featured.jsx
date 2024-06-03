import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div
      className=" p-20 py-32 bg- pink-100
    
    flex flex-col items-center justify-center"
    >
      <div className="text-3xl font-bold italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur
        dignissimos quia.
      </div>
      <div className="flex justify-between items-center mt-8 gap-5">
        <div className="relative h-[20rem] flex-1">
          <Image
            src={
              "https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
          />
        </div>
        <div className="p flex-1">
          <div className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            obcaecati sit maiores explicabo velit recusandae modi totam quos
            animi. Dicta praesentium cumque, placeat veniam aspernatur obcaecati
            repellat. Temporibus, id sapiente ipsum voluptates voluptatum
            tempora sunt maxime dolor veniam earum inventore neque consectetur
            amet eos.
          </div>
          <div className="btn mt-6 bg-rose-800 text-white  p-4 w-fit">
            Real all
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
