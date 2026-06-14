import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(
        "https://accident-tracker-1.onrender.com/api/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials:"include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();
       console.log(data);
      if (data.success) {

       localStorage.setItem(
       "user",
       JSON.stringify(data.user)
   );

     toast.success(data.message);

      navigate("/");

}

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  };

  return (
    <>
      <div className="mt-20">

        <h1 className="text-center text-2xl text-red-500 font-bold">
          Login Page
        </h1>

        <form
          onSubmit={onSubmitLogin}
          className="max-w-sm mx-auto"
        >

          <div className="mb-5">

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              placeholder="name@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />

          </div>

          <div className="mb-5">

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>

            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />

          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">

          Don't have an account?{" "}

          <Link
            to="/sign-up"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>

        </p>

      </div>
    </>
  );

};