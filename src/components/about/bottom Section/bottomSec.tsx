import Link from "next/link";
const BottomSec = () => {
  return (
    <div>
      <p className="my-10 font-[Marcellus] max-w-[1100px]">
        Frontend Developer specializing in React.js, Next.js, JavaScript and
        TypeScript. Adept at creating dynamic, responsive web applications and
        translating design wireframes into high-quality code. you can check out
        projects that i kept bulding{" "}
        <Link href="/projects">
          <span className="font-bold underline">PROJECTS.</span>
        </Link>{" "}
        Proficient in modern web development practices, state management and
        testing frameworks. Strong problem-solver with a passion for continuous
        learning and delivering innovative user experiences.
      </p>
    </div>
  );
};

export default BottomSec;
