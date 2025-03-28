import image from "../assets/images.jpg";
import Modal from "../components/Modal";
import DiaryEntries from "../components/DiaryEntries";
import React, { useState, useEffect } from "react";
import pencilIcon from "../assets/pencil.png"; // Import the pencil icon

export const Home = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [diaryEntries, setDiaryEntries] = useState([]);

  // Function to fetch diary entries from localStorage
  const fetchDiaryEntries = () => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryItems")) || [];
    // Sort entries by date (assuming date is in "YYYY-MM-DD" format)
    storedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));

    setDiaryEntries(storedEntries);
  };

  const deleteCard = (date) => {
    const updatedDiary = diaryEntries.filter((entry) => entry.date !== date);
    localStorage.setItem("diaryItems", JSON.stringify(updatedDiary));
    setDiaryEntries(updatedDiary);
  };

  // Fetch entries when the component mounts
  useEffect(() => {
    fetchDiaryEntries();
  }, [addOpen]); //whenever addOpen changes, fetchDiaryEntries will run

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-purple-200 p-4">
      {/* Header */}
      <header className="text-white py-4 text-3xl font-bold shadow-md flex justify-around items-center">
        <span>My Personal Diary</span>

        <button
          className="bg-white text-gray-800 rounded-2xl shadow-md px-8 py-2 flex items-center gap-4 cursor-pointer hover:bg-red-200 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={() => setAddOpen((prev) => !prev)}
        >
          <img src={pencilIcon} alt="Pencil Icon" className="w-25 h-25" />
          <span className="font-bold text-xxl"> Add New</span>
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

        <div className="mt-4 h-[900px] overflow-y-scroll rounded-lg shadow-inner bg-white p-4">
          <DiaryEntries diaryEntries={diaryEntries} deleteCard={deleteCard} />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-800 py-2 mt-4 shadow-md text-center">
        © 2025 My Diary App. All rights reserved.
      </footer>
    </div>
  );
};
