import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="w-[310px] sm:w-[350px] md:w-[400px] lg:w-[500px] mx-auto my-[100px]">
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/images/404-Error.svg"
            alt="404 Error Image Not Found"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "50px" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="my-5 text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] font-[Marcellus]">{`We Couldn't Find The Page You're Looking For ...`}</p>
          <Link href="/">
            <button className="bg-[#000] text-[#fff] py-2 px-5 rounded-md font-[Marcellus] capitalize tracking-wider">
              back home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
