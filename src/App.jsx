import { useState } from "react";

import "./App.css";
import Cards from "./pages/Cards";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl shadow-lg">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/0n8ck0G/ustsqw1468250014.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-2xl  md:text-3xl font-medium mt-3">
                {" "}
                camp batugate{" "}
              </h5>
              <p className="text-slate-500 text-lg mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque nisi totam veniam dolore?
              </p>
              <a
                href="#"
                className="text-center bg-blue-400 text-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                explore
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/0n8ck0G/ustsqw1468250014.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-2xl  md:text-3xl font-medium mt-3">
                {" "}
                camp kaptai lake{" "}
              </h5>
              <p className="text-slate-500 text-lg mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque nisi totam veniam dolore?
              </p>
              <a
                href="#"
                className="text-center bg-blue-400 text-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                explore
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/0n8ck0G/ustsqw1468250014.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-2xl  md:text-3xl font-medium mt-3">
                {" "}
                camp sundarban{" "}
              </h5>
              <p className="text-slate-500 text-lg mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque nisi totam veniam dolore?
              </p>
              <a
                href="#"
                className="text-center bg-blue-400 text-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
