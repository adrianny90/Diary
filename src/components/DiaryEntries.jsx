import React from "react";
import deleteIcon from "../assets/trash.png";

const DiaryEntries = ({ diaryEntries, deleteCard }) => {
  console.log(diaryEntries);
  return (
    <>
      <div className="mt-8 lg:w-3/4 text-left space-y-4 mx-auto ">
        {diaryEntries.length > 0 ? (
          diaryEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex items-center "
            >
              <img
                src={entry.imageUrl}
                alt="Entry"
                className="max-w-72 h-40 rounded-lg mr-10"
              />
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <h2 className="font-bold text-3xl">{entry.title}</h2>
                  <p className="font-semibold text-2xl mt-2">{entry.date}</p>
                </div>
                <button
                  onClick={() => deleteCard(entry.date)}
                  className="bg-gray-100 rounded-lg p-2 mt-4 hover:bg-red-400 transition duration-300 ease-in-out"
                >
                  <img
                    src={deleteIcon}
                    alt="Delete button"
                    className="w-[30px] self-start"
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No diary entries yet.</p>
        )}
      </div>
    </>
  );
};

export default DiaryEntries;
