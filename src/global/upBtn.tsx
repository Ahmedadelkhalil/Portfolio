"use client";
import { useState, useEffect } from "react";
// Icons
import { IoArrowUpSharp } from "react-icons/io5";

const UpBtn = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const up = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`bg-[#000] text-[#fff] font-bold w-[35px] h-[35px] flex justify-center items-center fixed 
        right-[30px] bottom-[30px] p-2 rounded-md
          ${
            showBtn ? "translate-x-[0]" : "translate-x-[300%]"
          } transition duration-300
         z-[999999]`}
        onClick={() => up()}
      >
        <IoArrowUpSharp />
      </button>
    </>
  );
};

export default UpBtn;
