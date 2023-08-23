import React from "react";
import { CreatePost } from "../components/CreatePost";
import { Post } from "../components/Post";
import { userPosts } from "../assets/constants";

export default function UserFeed() {
  return (
    <div className="flex  flex-col items-center lg:px-8 bg-black pt-14">
      <h2 className="mx-auto text-3xl text-[#C5C7CA] text-left w-2/3">
        Hello Jane
      </h2>
      <h3 className="text-lg  text-[#7F8084] text-left mt-2 mb-10  w-2/3">
        How are you doing today? Would you like to share something with the
        community 🤗{" "}
      </h3>
      <CreatePost />
      {userPosts.map((user, key) => {
        return (
          <>
            <Post {...user} />;
          </>
        );
      })}
    </div>
  );
}
