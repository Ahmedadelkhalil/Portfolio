"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import { MdDateRange } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// Types
import { ProjectDetails } from "@/types/projects";

const Card = ({
  project_name,
  project_img,
  project_date,
  project_desc,
  project_tech,
  project_demo,
  project_code,
}: ProjectDetails) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [techToShow, setTechToShow] = useState<number>(3);

  return (
    <>
      <Link href={`${project_code}`} target="_blank">
        <div className="relative h-[270px]">
          <Image
            src={project_img}
            alt="image not found"
            priority={true}
            quality={100}
            unoptimized
            width={0}
            height={0}
            style={{ width: "100%", height: "270px" }}
          />
        </div>
      </Link>
      <div className="my-5 mx-4">
        <Link href={`${project_code}`} target="_blank">
          <h3 className="font-[Marcellus] font-bold tracking-wider text-2xl">
            {project_name}
          </h3>
        </Link>
        {/* -------------- */}
        <div className="mt-2 text-sm flex items-center text-[#6b7280]">
          <span className="mr-2">
            <MdDateRange />
          </span>
          <span className="font-[Marcellus]">{project_date}</span>
        </div>
        {/* -------------- */}
        <p className="my-2 font-[Marcellus] text-[#111] text-sm h-[50px]">
          {project_desc}
        </p>
        {/* -------------- */}
        <div className="flex flex-wrap items-center h-[70px]">
          {project_tech.slice(0, techToShow).map((tech) => {
            return (
              <span
                className="bg-[#e5e7eb] font-[Marcellus] p-[5px] text-sm rounded-[2px] mr-2 mb-2"
                key={tech}
              >
                {tech}
              </span>
            );
          })}
          {project_tech.length <= 3 ? null : (
            <button
              className="text-sm font-[Marcellus] mb-2 underline"
              onClick={() => {
                if (showMore) {
                  setShowMore(false);
                  setTechToShow(3);
                } else {
                  setShowMore(true);
                  setTechToShow(project_tech.length);
                }
              }}
            >
              {showMore ? "- Less" : "+ More"}
            </button>
          )}
        </div>
        {/* -------------- */}
        <div className="flex mt-3">
          {project_demo ? (
            <Link
              href={`${project_demo}`}
              target="_blank"
              className="mr-4 hover:text-[#fff] hover:bg-[#000] border border-[#e5e7eb] transition ease-in-out duration-300 rounded-md"
            >
              <button className="flex items-center py-2 px-5 rounded-md sm:text-sm md:text-[15px]">
                <span className="mr-3">
                  <FaPlay />
                </span>
                <span className="font-[Marcellus] ">Demo</span>
              </button>
            </Link>
          ) : null}
          <Link
            href={`${project_code}`}
            target="_blank"
            className="hover:text-[#fff] hover:bg-[#000] border border-[#e5e7eb] transition ease-in-out duration-300 rounded-md"
          >
            <button className="flex items-center py-2 px-5 rounded-md sm:text-sm md:text-[15px]">
              <span className="mr-3">
                <FaGithub />
              </span>
              <span className="font-[Marcellus]">Code</span>
            </button>
          </Link>
        </div>
        {/* -------------- */}
      </div>
    </>
  );
};

export default Card;
