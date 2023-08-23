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
        <div className="modalDiv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all transform ease-out duration-500">
          <div className="bg-blackBg w-1/3 rounded-lg gradient">
            <button
              className=" bg-[#131319] rounded-full w-7 h-7 absolute right-4 top-4"
              onClick={() => {
                navigate("/home");
                document.body.style.overflow = "auto";
              }}
            >
              <div className="mx-auto w-2.5 h-2.5">
                <Cross />
              </div>
            </button>
            <div className="flex flex-col justify-center items-center">
              <h2 className="mt-10 text-center text-sm  font-bold leading-9 tracking-tight text-grayShade">
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
                    className="block text-sm text-left font-medium leading-6 text-gray"
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
                      className="bg-blackBg  block w-full rounded-md border-0 placeholder-lightGray  p-2 shadow-sm ring-1 ring-inset ring-blackBorder placeholder:text-gray-400 focus:outline-0 text-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium leading-6 text-gray"
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
                      className="bg-blackBg  block w-full rounded-md border-0 placeholder-lightGray  p-2 shadow-sm ring-1 ring-inset ring-blackBorder placeholder:text-gray-400 focus:outline-0 text-white  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 flex bg-blackBg items-center border border-blackBorder">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="bg-blackBg  block w-full rounded-md border-0 placeholder-lightGray  p-2 shadow-sm  placeholder:text-gray-400 focus:outline-0 text-white  sm:text-sm sm:leading-6"
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

              <p className="mt-2 text-left text-sm text-lightGray">
                Already have an account
                <button
                  className="ml-1 font-semibold leading-6 text-gray hover:text-indigo-500"
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
          <div className="bg-blackBg w-1/3 rounded-lg gradient">
            <button
              className=" bg-[#131319] rounded-full w-7 h-7 absolute right-4 top-4"
              onClick={() => {
                navigate("/home");
                document.body.style.overflow = "auto";
              }}
            >
              <div className="mx-auto w-2.5 h-2.5">
                <Cross />
              </div>
            </button>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
              <h2 className="mt-10 text-center text-sm  font-bold leading-9 tracking-tight text-grayShade">
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
                    className="block text-sm text-left font-medium leading-6 text-gray"
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
                      className="bg-blackBg  block w-full rounded-md border-0 placeholder-lightGray  p-2 shadow-sm ring-1 ring-inset ring-blackBorder placeholder:text-gray-400 focus:outline-0 text-white  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-gray hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 flex bg-blackBg items-center border border-blackBorder">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="bg-blackBg  block w-full rounded-md border-0 placeholder-lightGray  p-2 shadow-sm  placeholder:text-gray-400 focus:outline-0 text-white  sm:text-sm sm:leading-6"
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

              <p className="mt-2 text-left text-sm text-lightGray">
                Not registered yet?
                <button
                  className="ml-1 font-semibold leading-6 text-gray hover:text-indigo-500"
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
