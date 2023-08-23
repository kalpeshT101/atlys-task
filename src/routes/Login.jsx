import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets/svg/Logo";

export default function Login() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-center lg:px-8 bg-black">
        <div className="my-8">
          <Logo />
        </div>
        <div className="bg-[#27292D] w-1/3 rounded-lg gradient">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
            <h2 className="mt-10 text-center text-sm  font-bold leading-9 tracking-tight text-[#6B6C70]">
              WELCOME BACK
            </h2>
            <h2 className=" text-center text-lg font-bold  tracking-tight text-white">
              Log into your account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full p-4">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#C5C7CA]"
                >
                  Email or Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email or username"
                    autoComplete="email"
                    className="bg-[#27292D]  block w-full rounded-md border-0 placeholder-[#7F8084]  p-2 shadow-sm ring-1 ring-inset ring-[#35373B] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[#C5C7CA]"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#C5C7CA] hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="bg-[#27292D]  block w-full rounded-md border-0 placeholder-[#7F8084]  p-2 shadow-sm ring-1 ring-inset ring-[#35373B] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <Link to="home">
                  <button className="flex rounded  w-full justify-center  bg-[#4A96FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Login now
                  </button>
                </Link>
              </div>
            </form>

            <p className="mt-2 text-left text-sm text-[#7F8084]">
              Not registered yet?
              <a
                href="#"
                className="font-semibold leading-6 text-[#C5C7CA] hover:text-indigo-500"
              >
                {" "}
                Register →
              </a>
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
