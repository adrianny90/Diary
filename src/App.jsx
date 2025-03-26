import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-300 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={() => setAddOpen((prev) => !prev)}
        >
          Add new post
        </button>
        <Modal add={addOpen} changeAdd={setAddOpen} />
      </div>
    </>
  );
}

export default App;
