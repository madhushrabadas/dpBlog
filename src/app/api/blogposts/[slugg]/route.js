import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slugg } = params;
  console.log(slugg, "----");
  if (!slugg) {
    return new NextResponse(
      JSON.stringify({ message: "slugg is required!" }, { status: 400 })
    );
  }

  try {
    const post = await prisma.post.findUnique({
      where: { slug: slugg },
      include: { user: true },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }, { status: 404 })
      );
    }

    await prisma.post.update({
      where: { slug: slugg },
      data: { views: { increment: 1 } },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
