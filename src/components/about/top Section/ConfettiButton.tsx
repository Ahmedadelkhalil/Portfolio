import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <a href="/Ahmed Adel - Resume.pdf" download="Ahmed Adel - Resume.pdf">
      <button
        onClick={handleClick}
        className="uppercase my-5 text-[12px] bg-black text-white font-bold px-3 py-2 rounded shadow-lg border-[3px] border-[lightgray] hover:bg-[#2c2b2b] transition"
        style={{ letterSpacing: "1px" }}
      >
        Download Resume
      </button>
    </a>
  );
};

export default ConfettiButton;
