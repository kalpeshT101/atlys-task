import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <>
      <div className="bg-[#27292D] w-2/3 rounded border-2 border-[#35373B] ">
        <Link to="modal" state={{ background: location }}>
          <h1
            for="message"
            class="block mb-2 text-lg font-medium text-[#C5C7CA] p-4 text-left"
          >
            Create post
          </h1>
          <div className="flex bg-[#191920] mx-4 rounded-lg">
            <div
              style={{ "border-radius": "50%", width: 55, height: 55 }}
              className=" bg-[#27292D] p-[18px] m-3"
            >
              💬
            </div>
            <input
              id="message"
              rows="4"
              class="block p-4 w-full text-sm text-[#7F8084] bg-[#191920] rounded-lg border-transparent focus:border-transparent focus:ring-0 placeholder:text-base"
              placeholder="How are you feeling today?"
            />
          </div>

          <button
            type="submit"
            className="rounded float-right m-4 bg-[#4A96FF] px-10 py-2.5 text-base leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};
