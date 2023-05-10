import React from "react";

export default function LoginComponent() {
  return (
    <div className="w-full flex justify-center mb-8">
      <form className="flex flex-col gap-1 md:gap-3 w-64 md:w-96 text-base md:text-xl lg:text-base lg:items-center">
        <label
          htmlFor="email"
          className="border border-gray-300 py-1 flex flex-col px-2 md:py-3 md:px-4 lg:w-3/4 lg:px-2 lg:py-1 items-start"
        >
          <span>Email</span>
          <input type="email" name="email" className="hidden" />
        </label>
        <label
          htmlFor="password  "
          className="border border-gray-300 py-1 md:py-3 md:px-4 flex flex-col px-2 lg:w-3/4 lg:px-2 lg:py-1"
        >
          <span>Password</span>
          <input type="password" name="password" className="hidden" />
        </label>
      </form>
    </div>
  );
}
