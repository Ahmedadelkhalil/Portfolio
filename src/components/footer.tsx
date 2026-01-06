import Link from "next/link";
// Icons
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const socialMedia = [
    {
      platformName: "LinkedIn",
      platformIcon: AiOutlineLinkedin,
      platformLink: "https://www.linkedin.com/in/ahmed-adel-khalil/",
    },
    {
      platformName: "GitHub",
      platformIcon: FiGithub,
      platformLink: "https://github.com/Ahmedadelkhalil",
    },
    {
      platformName: "Gmail",
      platformIcon: SiGmail,
      platformLink: "mailto:ahmedkhalil4774@gmail.com",
    },
  ];
  const currentDate = new Date().getFullYear();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-5 my-2 sm:mx-10 sm:my-4">
      <div className="flex">
        {socialMedia.map((platform, indx) => {
          return (
            <Link
              key={indx}
              href={platform.platformLink}
              target="_blank"
              className="flex items-center mr-7 text-sm font-[Marcellus]"
            >
              <platform.platformIcon size={20} className="mr-2" />
              {platform.platformName}
            </Link>
          );
        })}
      </div>
      <div className="text-sm font-[Marcellus] mt-4 sm:mt-0 flex items-center">
        <Link
          href="https://github.com/Ahmedadelkhalil"
          target="_blank"
          className="underline"
        >
          Ahmed Adel
        </Link>
        <span>&nbsp; | {currentDate} ©</span>
      </div>
    </div>
  );
};

export default Footer;
