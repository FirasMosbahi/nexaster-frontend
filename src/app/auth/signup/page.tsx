"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
type SignUpForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  speciality: string;
  phoneNumber: string;
};
export default function Index(): React.ReactElement {
  const router = useRouter();
  const authForm = useForm<SignUpForm>();
  async function login(credentials: SignUpForm) {
    console.log("credentials", credentials);
    const res = await axios.post(
      `http://localhost:5000/auth/signup/doctor`,
      credentials,
    );
    console.log(res.data);
    router.push("/auth/login");
  }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center ml-44 mr-44 md:h-screen lg:py-0">
        <div className="w-full  bg-white rounded-lg shadow xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form
              onSubmit={authForm.handleSubmit(login)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="flex flex-row w-80">
                <div className="mr-8">
                  <div className="pb-8">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="doctor@doctor.com"
                      {...authForm.register("email")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="*********"
                      {...authForm.register("password")}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className=" mt-8 mb-8 w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    Don’t have an account yet?{" "}
                    <a
                      onClick={() => router.push("signup")}
                      href="#"
                      className="font-medium text-primary-600 hover:underline"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
                <div className="mr-8">
                  <div className="pb-8">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your first name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="mr doctor"
                      {...authForm.register("firstName")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="mr doctor last name"
                      {...authForm.register("lastName")}
                      required
                    />
                  </div>
                </div>
                <div className="mr-8">
                  <div className="pb-8">
                    <label
                      htmlFor="speciality"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your speciality
                    </label>
                    <input
                      type="text"
                      id="speciality"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="therapist"
                      {...authForm.register("speciality")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your phone number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
                      placeholder="+1 54 84 56"
                      {...authForm.register("phoneNumber")}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
