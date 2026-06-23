import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const BACKEND_URL= import.meta.env.VITE_API_URL

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const logoutHandler = async () => {

    try {

      const res = await fetch(
        `${BACKEND_URL}/api/user/logout`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.success) {

        localStorage.removeItem("user");

        toast.success(data.message);

        navigate("/login");

        window.location.reload();

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">

        <Link to={"/"}>
          <h1 className="font-bold">Accident-Tracker</h1>
        </Link>

        <ul className="flex gap-4 items-center">

          <Link to={"/"}>
            <li>HomePage</li>
          </Link>

          <Link to={"/AboutPage"}>
            <li>About</li>
          </Link>

          {user && (
            <>
              <Link to={"/report"}>
                <li className="hover:text-red-600 cursor-pointer">
                  Report
                </li>
              </Link>

              <Link to={"/dashboard"}>
                <li>Dashboard</li>
              </Link>
            </>
          )}

              <Link to={"/profile"}>
              <li>Profile</li>
              </Link>

          {!user ? (
            <>
              <Link to={"/login"}>
                <li>Login</li>
              </Link>

              <Link to={"/sign-up"}>
                <li>SignUp</li>
              </Link>
            </>
          ) : (
            <li
              onClick={logoutHandler}
              className="cursor-pointer text-red-600 font-semibold"
            >
              Logout
            </li>
          )}

        </ul>

      </div>
    </header>
  );
};

export default Navbar