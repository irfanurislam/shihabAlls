import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <img
          width={400}
          height={400}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Product Name</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">
            This is a brief description of the product. It highlights the key
            shihab
          </p>
          <div className="text-lg font-semibold">$99.99</div>
        </div>
        <div className="flex gap-4 w-full ">
          <button className="rounded-md w-full border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div>

      {/* <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <div className="relative h-[275px] w-[350px] rounded-lg overflow-hidden">
          <img
            width={400}
            height={400}
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card navigate ui"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 text-black py-2 px-4 opacity-50 rounded-md font-semibold hover:bg-white/80">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Product Name</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">
            This is a brief description of the product. It highlights the key
            features.
          </p>
          <div className="text-lg font-semibold">$99.99</div>
        </div>
        <div className="flex gap-4 w-full ">
          <button className="rounded-md w-full border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div> */}
      {/* <div className="relative min-h-full rounded-lg overflow-hidden shadow-lg">
        <div className="relative group">
          <img
            width={400}
            height={400}
            className="h-[275px] w-[350px] object-cover"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card navigate ui"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-black/50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-lg font-semibold mb-2">Product Name</h1>
            <p className="text-sm mb-4">
              This is a brief description of the product.
            </p>
            <div className="text-lg font-semibold mb-4">$99.99</div>
            <div className="flex gap-2">
              <button className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
                View Details
              </button>
              <button className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200">
                Add to Cart
              </button>
            </div>
          </div>
          <div
            className="absolute inset-0 border-2 border-transparent
           group-hover:border-white transition-all duration-300"
          ></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
