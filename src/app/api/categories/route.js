import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    console.log(categories);
    return new NextResponse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify("something wnt wrong"));
  }
};
