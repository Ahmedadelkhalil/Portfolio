import confetti from "canvas-confetti";
import Link from "next/link";

const ConfettiButton = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Link
      href="/example.pdf" // Path to the file in the public folder
      download="Example-PDF-document" // Suggested filename for the download
    >
      <button
        onClick={handleClick}
        className="uppercase my-5 text-[12px] bg-black text-white font-bold px-3 py-2 rounded shadow-lg border-[3px] border-[lightgray] hover:bg-[#2c2b2b] transition"
        style={{ letterSpacing: "1px" }}
      >
        Download Resume
      </button>
    </Link>
  );
};

export default ConfettiButton;
