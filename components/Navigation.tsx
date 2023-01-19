import Logo from "./fullLogo";

const Navigation = () => {
  const navs = ["Home", "About", "Works", "Kitchen", "Contact"];
  return (
    <div className="w-full flex items-center px-20 pt-14 justify-between">
      <Logo />
      <div className="flex items-center text-white font-bold gap-10">
        {navs.map((nav, index) => (
          <div key={index} className="uppercase">
            {nav}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
