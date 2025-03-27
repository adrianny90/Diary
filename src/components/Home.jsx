import image from "../assets/images.jpg";
import Modal from "../components/Modal";
import DiaryEntries from "../components/DiaryEntries";
import React, { useState, useEffect } from "react";

export const Home = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [diaryEntries, setDiaryEntries] = useState([]);

  // Function to fetch diary entries from localStorage
  const fetchDiaryEntries = () => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryItems")) || [];
    setDiaryEntries(storedEntries);
  };

  // Fetch entries when the component mounts
  useEffect(() => {
    fetchDiaryEntries();
  }, [addOpen]); //whenever addOpen changes, fetchDiaryEntries will run

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
        {/* Diary Entries Component */}
        <DiaryEntries diaryEntries={diaryEntries} />
      </main>

      {/* Footer */}
      <footer className="text-gray-800 py-2 mt-4 shadow-md text-center">
        © 2025 My Diary App. All rights reserved.
      </footer>
    </div>
  );
};
