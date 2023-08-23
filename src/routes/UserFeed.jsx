import React from "react";
import { CreatePost } from "../components/CreatePost";
import { Post } from "../components/Post";
import { userPosts } from "../assets/constants";

export default function UserFeed() {
  return (
    <div className="flex flex-col items-center lg:px-8 bg-black pt-14">
      <h2 className="mx-auto text-3xl text-gray text-left w-[60%]">
        Hello Jane
      </h2>
      <h3 className="text-lg text-lightGray text-left mt-2 mb-10  w-[60%]">
        How are you doing today? Would you like to share something with the
        community 🤗{" "}
      </h3>
      <CreatePost />
      {userPosts.map((user, index) => (
        <React.Fragment key={index}>
          <Post {...user} />
        </React.Fragment>
      ))}
    </div>
  );
}
