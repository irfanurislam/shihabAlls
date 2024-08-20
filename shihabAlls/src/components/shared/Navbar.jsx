import React, { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const { logOut, user } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: `user log out`,
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const photo = user?.photoURL;
  console.log(photo);
  return (
    <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white mb-24">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>
          {user ? (
            <>
              <img
                className="bg-white border border-lime-500 w-10 h-10 rounded-full"
                src={photo}
                alt="img"
              />
            </>
          ) : (
            "Avatar"
          )}
        </h2>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        <Link to={"/"} className="group flex  cursor-pointer flex-col">
          Home
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to={"/signup"} className="group flex  cursor-pointer flex-col">
          signup
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          to={"/calculator"}
          className="group flex  cursor-pointer flex-col"
        >
          calculate
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {user ? (
          <>
            <li className="flex justify-center items-center gap-2">
              <p className="text-green-400">{user?.displayName}</p>
              <Link
                onClick={handleLogout}
                className="group flex  cursor-pointer flex-col"
              >
                logout
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <Link to="/signup" className="group flex  cursor-pointer flex-col">
              Sign
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </>
        )}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
              Home
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Services
            </li>
            <Link
              to={"/login"}
              className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 "
            >
              SignUp
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
