import Image from "next/image";
import type { Metadata } from "next";
// Skills Data
import skills from "@/data/skills";
// Icons
import { IoMdCodeWorking } from "react-icons/io";

export const metadata: Metadata = {
  title: "Ahmed Adel | Skills",
  description: "Ahmed Adel's Skills",
};

const Skills = () => {
  let categories = Object.entries(skills);

  return (
    <section className="m-5 mb-10 sm:m-20 min-h-[70vh]">
      <h1 className="mb-10 text-2xl sm:text-3xl font-[Marcellus] uppercase font-bold">
        Skills
      </h1>
      {categories.map((techField) => {
        return (
          <div key={techField[0]}>
            <h3 className="text-lg sm:text-xl font-[Marcellus] font-bold capitalize tracking-wider mb-4 flex items-center">
              <IoMdCodeWorking style={{ marginRight: "10px" }} />
              {techField[0]}
            </h3>
            <div className="flex flex-wrap">
              {techField[1].map((tech) => {
                return (
                  <div
                    className="flex items-center mr-10 mt-5"
                    key={`${tech.tech_id}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative w-[55px] sm:w-[70px] h-[55px] sm:h-[70px]">
                        <Image
                          src={`${tech.tech_img}`}
                          alt={`${tech.tech_name}`}
                          quality={100}
                          priority={true}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span className="text-sm font-[Marcellus] mt-2 font-bold">
                        {tech.tech_name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            {categories.indexOf(techField) === categories.length - 1 ? (
              ""
            ) : (
              <hr className="my-7 w-[70%] mx-auto border-[#999]" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
