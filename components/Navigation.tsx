import Link from "next/link";
import Logo from "./fullLogo";

export const navs = ["Home", "About", "Works", "Kitchen", "Contact"];
const Navigation = () => {
  return (
    <div className="w-full flex items-center pt-14 justify-between">
      <Logo />
      <div className="flex items-center  text-white font-bold gap-10">
        {navs.map((nav, index) => (
          <Link
            href={`${index !== 0 ? "#" + nav.toLowerCase() : ""}`}
            
            key={index}
            className={`uppercase ${
              index === 3
                ? " opacity-50 cursor-not-allowed relative"
                : "cursor-pointer"
            }`}
          >
            <span> {nav}</span>
            {index === 3 && (
              <div className="absolute text-xs top-[-1.5rem] -right-6  px-2 py-1 rounded-tl-md rounded-br-md bg-[rgb(55,91,254)]">
                SOON
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
