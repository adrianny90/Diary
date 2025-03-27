import React from "react";

const DiaryEntries = ({ diaryEntries }) => {
  console.log(diaryEntries);
  return (
    <>
      <div className="mt-8 lg:w-3/4 text-left space-y-4 mx-auto">
        {diaryEntries.length > 0 ? (
          diaryEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex items-center"
            >
              <img
                src={entry.imageUrl}
                alt="Entry"
                className="max-w-72 h-40 rounded-lg mr-10"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl">{entry.title}</h2>
                <p className="font-semibold text-2xl mt-2">{entry.date}</p>
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
