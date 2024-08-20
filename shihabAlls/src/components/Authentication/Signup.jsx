import React, { useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { imageUpload, saveUser } from "../../api/utilities";

const Signup = () => {
  const { newCreateUser, logOut, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // react hook apply

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword } = data;
    setError("");

    if (password !== confirmPassword) {
      return setError("Password did not match Confirm Password");
    }

    newCreateUser(email, password)
      .then((result) => {
        updateUserProfile(name)
          .then(() => {
            console.log(result.user);
            logOut();
            navigate("/login", { replace: true });
            saveUser(result.user);
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="pt-32">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up!</h1>
          </div>
          <div className="card max-w-lg md:w-[500px]  shadow-2xl bg-green-300">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="your Name "
                    className="input input-bordered placeholder:text-gray-500   text-gray-900 ring-2 ring-inset ring-gray-300 "
                  />
                  {errors.name && (
                    <span className="text-error">Name Must Be required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                    placeholder="email"
                    className="input input-bordered ring-1"
                  />
                  {errors.email && (
                    <span className="text-error">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered ring-1"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-error">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-error">Password must be 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-error">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-error">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    {...register("confirmPassword", { required: true })}
                    placeholder="address"
                    className="input input-bordered ring-1"
                  />
                  {errors.confirmPassword && (
                    <span className="text-error">address is required</span>
                  )}
                </div>

                {<p className="text-error">{error}</p>}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary ring-1"
                  />
                </div>
                <p className="text-center">
                  Already Have A Account{" "}
                  <Link to="/login" className="btn btn-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
