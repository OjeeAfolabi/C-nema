import React, { useState } from "react";
import "./Login.css";
import logo from "../../public/my-c-nemalogo.png";
import {login, signup} from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="h-screen bg-[linear-gradient(#0000007e,#0000007e),url('/src/assets/background_banner.jpg')] py-5 px-[8%]">
      <img className="w-[100px] mb-0" src={logo} alt="" />
      <div>
        <form className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-sm p-[50px] m-auto">
          <h1 className="text-2xl font-semibold text-white mb-8">
            {signState}
          </h1>
          <div className="flex flex-col gap-4 mb-6">
            {signState === "Sign Up" ? (
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-[#333333] rounded text-white outline-none border-none"
              />
            ) : (
              <></>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#333333] rounded text-white outline-none border-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#333333] rounded text-white outline-none border-none"
            />
          </div>
          <button className="w-full p-4 bg-[#e50914] text-white rounded font-semibold mb-6 hover:bg-[#c11119]">
            {signState}
          </button>
          <div className="flex justify-between items-center text-[#737373]">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="accent-[#737373]" />
              <label>Remember Me</label>
            </div>
            <p className="cursor-pointer hover:underline">Need Help?</p>
          </div>
          <div className="mt-2 text-[#737373]">
            {signState === "Sign In" ? (
              <p>
                New to C-Nema{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                  className="ml-1.5 text-white font-medium cursor-pointer"
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                  className="ml-1.5 text-white font-medium cursor-pointer"
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
