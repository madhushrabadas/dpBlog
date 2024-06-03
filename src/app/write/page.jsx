import dynamic from "next/dynamic";

const Write = dynamic(() => import("@/components/writepage/Write"), {
  ssr: false,
});

const Writepage = () => {
  return (
    <div>
      <Write />
    </div>
  );
};

export default Writepage;
