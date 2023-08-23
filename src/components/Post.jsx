import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Comment } from "../assets/svg/Comment";
import { Dots } from "../assets/svg/Dots";
export const Post = ({
  key,
  imageSrc,
  name,
  postText,
  emojiReaction,
  postedTime,
  isEdited,
}) => {
  let location = useLocation();

  return (
    <>
      <div
        className="bg-[#27292D] w-2/3 rounded border-2 border-[#35373B] my-8"
        key={key}
      >
        <Link to="modal" state={{ background: location }}>
          <div className="flex flex-1 m-5 items-center justify-between">
            <div className="flex">
              <img
                class="w-10 h-10 rounded-full"
                src={imageSrc}
                alt="Rounded avatar"
              />
              <div className="ml-2">
                <h3 className="text-[#C5C7CA] text-left text-base font-semibold">
                  {name}
                </h3>
                <h3 className="text-[#7F8084] text-left text-sm">
                  {postedTime} {isEdited}
                </h3>
              </div>
            </div>
            <Dots />
          </div>
          <div className="flex bg-[#191920] mx-5 rounded-lg">
            <div
              style={{ "border-radius": "50%", width: 55, height: 55 }}
              className=" bg-[#27292D] p-[16px] m-3"
            >
              {emojiReaction}
            </div>
            <div class="text-left block p-4 w-full text-sm text-[#7F8084] bg-[#191920] rounded-lg border-transparent focus:border-transparent focus:ring-0 placeholder:text-base">
              {postText}
            </div>
          </div>

          <div className="flex items-center m-5">
            <Comment />
            <h3 className="ml-2 text-sm text-[#7F8084]">24 comments</h3>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};
