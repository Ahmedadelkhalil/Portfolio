"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConfettiButton from "./ConfettiButton";
// Social Media Info
import { socialMedia } from "@/data/socialInfo";
// Personal Details
import { personalDetails } from "@/data/personalDetails";

const TopSec = () => {
  const hightlights = ["Front-End", "TypeScript", "React", "Next"];
  const [showMore, setShowMore] = useState<boolean>(false);
  const [socialIconsNums, setSocialIconsNums] = useState<number>(3);

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="leftSide mr-0 sm:mr-7 flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="avatar image"
            className="rounded"
            width={250}
            height={250}
            priority={true}
            unoptimized
          />
        </div>
        <div className="rightSide flex flex-col items-center sm:items-start mt-7 sm:mt-0">
          <h2 className="text-3xl font-[Marcellus] font-bold">Ahmed Adel</h2>
          {personalDetails.map((info) => {
            return (
              <p
                className="flex items-center mt-2 text-[#6b7280]"
                key={info.id}
              >
                <info.icon size={22} className="mr-2 mt-[2px]" />
                {info.desc}
              </p>
            );
          })}
          <div className="mt-3">
            {hightlights.map((hightlight) => {
              return (
                <span
                  className="bg-[#e5e7eb] font-[Marcellus] p-[5px] text-sm rounded-[2px] mr-2"
                  key={hightlight}
                >
                  {hightlight}
                </span>
              );
            })}
          </div>
          <div className="mt-6 flex">
            {socialMedia.slice(0, socialIconsNums).map((platform) => {
              return (
                <Link
                  href={`${platform.platformLink}`}
                  key={platform.platformId}
                  target="_blank"
                  title={`${platform.platformName}`}
                  className="mr-4"
                >
                  <platform.platformIcon size={23} />
                </Link>
              );
            })}
            <button
              onClick={() => {
                if (showMore === false) {
                  setShowMore(true);
                  setSocialIconsNums(socialMedia.length);
                } else {
                  setShowMore(false);
                  setSocialIconsNums(3);
                }
              }}
              className="text-sm font-[Marcellus] underline"
            >
              {showMore ? "- Less" : "+ More"}
            </button>
          </div>
          <ConfettiButton />
        </div>
      </div>
    </>
  );
};

export default TopSec;
