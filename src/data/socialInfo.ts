import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
// Social Media Info Types
import { SocialInfo } from "@/types/socialInfoTypes";

export const socialMedia: SocialInfo = [
  {
    platformId: 1,
    platformName: "Linkedin",
    platformIcon: FaLinkedin,
    platformLink: "https://www.linkedin.com/in/ahmed-adel-khalil/",
  },
  {
    platformId: 2,
    platformName: "Github",
    platformIcon: FaGithub,
    platformLink: "https://github.com/Ahmedadelkhalil",
  },
  {
    platformId: 4,
    platformName: "Whatsapp",
    platformIcon: IoLogoWhatsapp,
    platformLink: "https://api.whatsapp.com/send?phone=01025521486",
  },
  {
    platformId: 5,
    platformName: "Gmail",
    platformIcon: SiGmail,
    platformLink: "mailto:ahmedkhalil4774@gmail.com",
  },
];
