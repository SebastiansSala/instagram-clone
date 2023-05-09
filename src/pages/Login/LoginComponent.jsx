import React from "react";

export default function LoginComponent() {
  return (
    <div className="w-full flex justify-center mb-8">
      <form className="flex flex-col gap-1 w-52">
        <label htmlFor="email" className="border border-gray-300 py-1 flex flex-col items-start">
          <span>Email</span>
          <input type="email" name="email" className="hidden" />
        </label>
        <label htmlFor="password" className="border border-gray-300 py-1 flex flex-col">
          <span>Password</span>
          <input type="password" name="password" className="hidden" />
        </label>
      </form>
    </div>
  );
}
