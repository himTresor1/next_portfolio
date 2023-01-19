import logoSvg from "@/assets/logo.svg";
const Logo = () => {
  return (
    <div className="relative cursor-pointer group w-fit">
      <img src={logoSvg.src} alt="logo" className="group-hover:rotate-90 duration-700 delay-100 transition-transform" style={{ width: 75 }} />
      <div className="absolute text-white top-[calc(30%+5px)] font-bold left-[calc(25%+8px)]">ME</div>
    </div>
  );
};
export default Logo;
