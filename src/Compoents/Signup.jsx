import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="text-lg text-gray-400 mt-1">
          Join the Task Locator community
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">

        {/* Full Name */}
        <div>
          <label className="block text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="m@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="At least 6 characters"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Repeat password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-3 rounded-lg">
          Sign Up
        </button>

      </div>

      {/* Login text */}
      <p className="text-center text-gray-400 mt-8">
        Already have an account?{" "}
        <Link to="/signin" className="text-indigo-600 font-semibold cursor-pointer">
          Log in
        </Link>
      </p>

    </div>
  );
};

export default Signup;