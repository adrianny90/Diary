import React from "react";
import image from "../assets/images.jpg";
import Modal from "../components/Modal";
import { useState } from "react";

export const Home = () => {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-purple-200 p-4 ">
      {/* Header */}
      <header className="text-white py-4 text-3xl font-bold shadow-md flex justify-around">
        <span>My Personal Diary</span>

        <button
          className="bg-white text-gray-800 rounded-2xl shadow-md p-2 cursor-pointer hover:bg-purple-300 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={() => setAddOpen((prev) => !prev)}
        >
          Add New Post
        </button>
        <Modal add={addOpen} changeAdd={setAddOpen} />
      </header>

      <main className="flex-grow">
        <div className="mt-4 rounded-lg">
          <img
            src={image}
            alt="image"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="mt-8 lg:w-3/4 text-center space-y-4 mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
            <img
              src={image}
              alt="Entry"
              className="max-w-72 h-40 rounded-lg mr-10"
            />
            <div>
              <p className="font-bold text-3xl ">fff</p>
              <p className="font-semibold text-2xl mt-2">hhh</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-800 py-2 mt-4 shadow-md text-center">
        © 2025 My Diary App. All rights reserved.
      </footer>
    </div>
  );
};
