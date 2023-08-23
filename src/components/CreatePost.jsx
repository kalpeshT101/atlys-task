import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const CreatePost = () => {
  let location = useLocation();
  return (
    <>
      <div className="bg-blackBg w-2/3 rounded border-2 border-blackBorder mb-5">
        <Link to="onboarding" state={{ background: location }}>
          <h1
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray p-4 text-left"
          >
            Create post
          </h1>
          <div className="flex bg-[#191920] mx-4 rounded-lg">
            <div
              style={{ borderRadius: "50%", width: 55, height: 55 }}
              className=" bg-blackBg p-[18px] m-3"
            >
              💬
            </div>
            <input
              id="message"
              rows="4"
              className="block p-4 w-full text-sm text-lightGray bg-[#191920] rounded-lg border-transparent focus:border-transparent focus:ring-0 placeholder:text-base"
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
