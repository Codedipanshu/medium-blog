import { SignupInput } from "@codedipanshu/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      // alert
    }
  };

  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className=" flex justify-center">
        <div className=" w-[55%]">
          <div className=" text-center px-10">
            <div className=" text-3xl font-extrabold">
              {type === "signup"
                ? "Create an account"
                : "Login to your account"}
            </div>
            <div className=" pt-2 text-l text-slate-500 font-normal">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className=" pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Sign in" : "Sign up"}
              </Link>
            </div>
          </div>
          <div className=" pt-4">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs((c) => ({ ...c, name: e.target.value }));
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="m@example.com"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, email: e.target.value }));
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="**********"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, password: e.target.value }));
              }}
            />
          </div>
          <button
            onClick={sendRequest}
            type="button"
            className=" w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputType) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Auth;
