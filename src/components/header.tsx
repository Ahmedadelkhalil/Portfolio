"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const nav = [
    {
      page: "about",
      link: "/",
    },
    {
      page: "projects",
      link: "/projects",
    },
    {
      page: "skills",
      link: "/skills",
    },
  ];
  const pathname = usePathname();
  return (
    <header className="flex items-center mx-5 sm:mx-10 mb-[50px]">
      <Link href="/">
        <h1 className="flex text-[26px] mr-7 font-[Marcellus] font-bold cursor-pointer">
          Ahmed <span className="hidden sm:block ml-2">Adel</span>
        </h1>
      </Link>
      <nav>
        <ul className="flex">
          {nav.map((link, indx) => {
            return (
              <Link href={link.link} key={indx}>
                <li
                  className={`cursor-pointer mr-3 capitalize tracking-wide font-[Marcellus] ${
                    pathname === link.link ? "font-bold underline" : ""
                  } transition duration-200 hover:font-bold`}
                >
                  {link.page}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
