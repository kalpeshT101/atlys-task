import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Cross } from "../assets/svg/Cross";
import { Eye } from "../assets/svg/Eye";

export default function OnboardingModal() {
  // to disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [loginView, setLoginView] = useState(true);

  useEffect(() => {
    renderView();
  }, [loginView]);

  function renderView() {
    if (loginView) {
      return (
        <div className="modalDiv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="bg-[#27292D] w-1/3 rounded-lg gradient">
            <button
              style={{ "border-radius": "50%", width: 30, height: 30 }}
              className=" bg-[#131319] p-[10px] m-3  float-right"
              onClick={() => {
                navigate("/home");
                document.body.style.overflow = "auto";
              }}
            >
              <Cross />
            </button>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
              <h2 className="mt-10 text-center text-sm  font-bold leading-9 tracking-tight text-[#6B6C70]">
                SIGN UP
              </h2>
              <h2 className=" text-center text-lg font-bold  tracking-tight text-white">
                Create an account to continue
              </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full p-4">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium leading-6 text-[#C5C7CA]"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      className="bg-[#27292D]  block w-full rounded-md border-0 placeholder-[#7F8084]  p-2 shadow-sm ring-1 ring-inset ring-[#35373B] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium leading-6 text-[#C5C7CA]"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Choose a preferred username"
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
                  <div className="mt-2 flex bg-[#27292D] items-center border border-[#35373B]">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="bg-[#27292D]  block w-full rounded-md border-0 placeholder-[#7F8084]  p-2 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    <div className="mr-2">
                      <Eye />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate("/home");
                      document.body.style.overflow = "auto";
                    }}
                    className="flex rounded  w-full justify-center  bg-[#4A96FF] px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Continue
                  </button>
                </div>
              </form>

              <p className="mt-2 text-left text-sm text-[#7F8084]">
                Already have an account
                <button
                  className="ml-1 font-semibold leading-6 text-[#C5C7CA] hover:text-indigo-500"
                  onClick={() => setLoginView(!loginView)}
                >
                  {" "}
                  Login →
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modalDiv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="bg-[#27292D] w-1/3 rounded-lg gradient">
            <button
              style={{ "border-radius": "50%", width: 30, height: 30 }}
              className=" bg-[#131319] p-[10px] m-3  float-right"
              onClick={() => {
                navigate("/home");
                document.body.style.overflow = "auto";
              }}
            >
              <Cross />
            </button>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
              <h2 className="mt-10 text-center text-sm  font-bold leading-9 tracking-tight text-[#6B6C70]">
                Welcome Back
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
                    className="block text-sm text-left font-medium leading-6 text-[#C5C7CA]"
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
                  <div className="mt-2 flex bg-[#27292D] items-center border border-[#35373B]">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="bg-[#27292D]  block w-full rounded-md border-0 placeholder-[#7F8084]  p-2 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                    <div className="mr-2">
                      <Eye />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate("/home");
                      document.body.style.overflow = "auto";
                    }}
                    className="flex rounded  w-full justify-center  bg-[#4A96FF] px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login now
                  </button>
                </div>
              </form>

              <p className="mt-2 text-left text-sm text-[#7F8084]">
                Already have an account
                <button
                  className="ml-1 font-semibold leading-6 text-[#C5C7CA] hover:text-indigo-500"
                  onClick={() => setLoginView(!loginView)}
                >
                  {" "}
                  Register →
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  const navigate = useNavigate();
  return <>{renderView()}</>;
}