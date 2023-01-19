import { navs } from "./Navigation";

const Footer = () => {
  return (
    <div className="bg-[rgb(23,26,35)]  text-gray-500 px-10 flex justify-between w-full py-12 ">
      <div className="upppercase font-bold">
        COPYRIGHT &copy; 2022 ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-4">
        {navs.map((nav, index) => (
          <div className="font-bold" key={index}>{nav}</div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
