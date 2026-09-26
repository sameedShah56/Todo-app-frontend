import {Link} from "react-router-dom"

const Signin = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back
        </h1>

        <p className="text-lg text-gray-400 mt-1">
          Login to your account
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="m@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700">
              Password
            </label>

            <button className="text-indigo-600">
              Forgot?
            </button>
          </div>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-3 rounded-lg">
          Login
        </button>

      </div>

      {/* Signup text */}
      <p className="text-center text-gray-400 mt-8">
        Don't have an account?{" "}
        <Link to="/signup" className="text-indigo-600 font-semibold cursor-pointer">
          Sign up
        </Link>
      </p>

    </div>
  );
};

export default Signin;