"use client";

import Link from "next/link";
import Image from "next/image";
// import { useSession } from "next-auth/react";
import { useState } from "react";

const commentsData = [
  {
    _id: "1",
    desc: "This is the first comment",
    createdAt: "2024-06-01",
    user: {
      name: "John Doe",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    _id: "2",
    desc: "This is the second comment",
    createdAt: "2024-06-02",
    user: {
      name: "Jane Smith",
      image: "https://via.placeholder.com/50",
    },
  },
  // More comments...
];

const Comments = ({ postSlug, commentsData }) => {
  //   const { status } = useSession();
  const status = false;
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Comments</h1>
      {status === "authenticated" ? (
        <div style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Write a comment..."
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div>
        {commentsData?.map((item) => (
          <div
            key={item._id}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {item?.user?.image && (
                <Image
                  src={item.user.image}
                  alt=""
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                />
              )}
              <div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  {item.user.name}
                </span>
                <span style={{ color: "#555" }}>{item.createdAt}</span>
              </div>
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
