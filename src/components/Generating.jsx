import { useState } from "react";
import { searchMd } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../error/ErrorHandling";

const Generating = ({ className = "" }) => {
  const [generate, setGenerate] = useState("");

  const handleInputChange = (event) => {
    setGenerate(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (generate.trim() === "") {
      toast.error("Please enter a value", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setGenerate("");
      toast.success(`Hello ${generate}`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <ErrorBoundary>
        <form
          className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className} text-base`}
          onSubmit={handleClick}
        >
          {generate.length > 0 && (
            <div className="dot-spinner w-5 h-5 mr-4">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          )}
          <input
            type="text"
            name="generate"
            placeholder="AI is generating"
            aria-label="AI is generating"
            value={generate}
            onChange={handleInputChange}
            className="flex-grow bg-transparent border-none outline-none w-full"
          />
          <button
            type="submit"
            className="flex items-center bg-transparent border-none outline-none"
          >
            <img
              className="w-5 h-5"
              style={{ cursor: "pointer" }}
              src={searchMd}
              alt="Search"
            />
          </button>
        </form>
        <ToastContainer />
      </ErrorBoundary>
    </>
  );
};

export default Generating;
