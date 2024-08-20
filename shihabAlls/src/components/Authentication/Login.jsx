import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";

// import "./Login.css";

const Login = () => {
  const { signInNew, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    console.log(email, password);
    signInNew(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // const handleGoogleSign = () => {
  //   googleSignIn()
  //     .then((result) => {
  //       const googleLog = result?.user;
  //       console.log(googleLog);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error.message);
  //     });
  // };
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        const googleLog = result?.user;
        console.log(googleLog);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: googleLog.email,
            name: googleLog.displayName,
            photoURL: googleLog.photoURL,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User saved:", data);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("Error saving user:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-20 text-black">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card md:w-[400px] max-w-lg shadow-2xl bg-base-400">
            <form onSubmit={handleLoginSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder=" your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input-group">
                    <input
                      required
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full input input-bordered"
                    />
                    <span
                      className="toggle-password mt-4 ml-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </label>
                </div>
                {<p className="text-error">{error}</p>}

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary"
                  />
                </div>
                <p className="text-center">
                  Don't Have Any Account{" "}
                  <Link to="/signup" className="btn btn-link text-blue-500">
                    Sign Up
                  </Link>
                </p>

                <div className="divider">Another Social </div>
              </div>
            </form>
            <div className="mb-8 px-8">
              <button
                onClick={handleGoogleSign}
                className="btn btn-block btn-outline bg-emerald-300"
              >
                <FcGoogle className="text-2xl mr-12" />
                <span>Google Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
