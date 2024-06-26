import CardList from "@/components/cardLists/CardList";
import CategoryList from "@/components/category/CategoryList";
import Featured from "@/components/featured/Featured";
import SideMenu from "@/components/sidemenu/Sidemenu";
import Image from "next/image";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex justify-between px-20 gap-4 ">
        <div className="w-[70%]">
          <CardList page={page} />
        </div>
        <div className="w-[30%]">
          <SideMenu dataToShow={5} />
        </div>
      </div>
    </>
  );
}
