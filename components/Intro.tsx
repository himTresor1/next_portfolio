import Link from "next/link";
import first from "@/assets/center_box_bg.png";
import shape1 from "@/assets/shape_1.png";
import shape2 from "@/assets/shape_2.png";
import WebAnimation from "@/assets/web_animation_bg.png";
import FeDev from "@/assets/fe_dev_bg.png";
import MobileDev from "@/assets/mobile_dev_bg.png";
import InteractinDesign from "@/assets/interaction_design_bg.png";
import webanimationIcon from "@/assets/web_animation.svg";
import InteractionDesignIcon from "@/assets/interaction_icon.svg";
import FaDevIcon from "@/assets/front_end_icon.svg";
import mobileDevIcon from "@/assets/mobile_dev_icon.svg";

const Intro = () => {
  return (
    <div className="flex pt-[20rem] relative flex-col gap-3">
      <img src={shape1.src} className="w-28 absolute top-[10rem] left-12" />
      <img src={shape2.src} className="w-14 absolute top-[5rem] left-[36rem]" />
      <div className="flex items-center gap-2 text-6xl">
        <div>👋</div>
        <div className="text-[rgb(54,91,254)] flex gap-[1px] items-center">
          <span>H</span>
          <span>i</span>
          <span>F</span>
          <span>o</span>
          <span>l</span>
          <span>k</span>
          <span>s</span>
          <span>&nbsp;!</span>
        </div>
      </div>
      <div className="flex gap-7 flex-col">
        <div className="text-white text-5xl font-bold">I`m Muhammed Erdem</div>
        <div className="text-[rgb(54,91,254)] text-lg">Front-end Engineer</div>
        <div className="text-gray-300 max-w-[35rem] text-lg leading-8">
          Specialized in front-end development but also like trying out other
          technologies in order to become more flexible.
        </div>
        <div className="flex items-center gap-10">
          <div className="bg-[rgb(18,79,223)] font-bold rounded-tl-[16px] text-white px-7 py-3 rounded-br-[16px]">
            KNOW ME
          </div>
          <Link href="" className="text-gray-300 font-semibold text-lg">
            Check My Resume
          </Link>
        </div>
      </div>
      <div className="absolute w-1/2 h-[30rem] flex justify-center items-center right-0">
        <img src={first.src} className="w-[10rem]" />
        <div className="absolute flex-col h-[10rem] w-[10rem] flex items-center justify-center gap-5  top-12 left-32">
          <img src={webanimationIcon.src} className="w-12 z-50" />
          <div className="z-50 text-lg text-white font-bold max-w-[5rem] text-center">
            Web Animation
          </div>
          <img src={WebAnimation.src} className="absolute z-0" />
        </div>
        <div className="absolute flex-col h-[20rem] w-[20rem] flex items-center justify-center gap-5  -top-10 right-6">
          <img src={FaDevIcon.src} className="w-24 z-50" />
          <div className="z-50 text-white font-bold max-w-[7rem] text-center">
            Front-end Development
          </div>
          <img src={FeDev.src} className="absolute z-0" />
        </div>
        <div className="absolute flex-col h-[10rem] w-[10rem] flex items-center justify-center gap-5  bottom-5 right-[9rem]">
          <img src={mobileDevIcon.src} className="w-7 z-50" />
          <div className="z-50 text-white text-lg font-bold max-w-[7rem] text-center">
            Mobile Development
          </div>
          <img src={MobileDev.src} className="absolute z-0" />
        </div>
        <div className="absolute flex-col h-[10rem] w-[10rem] flex items-center justify-center gap-5 bottom-4 left-[5.5rem]">
          <img src={InteractionDesignIcon.src} className="w-10 z-50" />
          <div className="z-50 text-white font-bold max-w-[7rem] text-center">
            Interaction Design
          </div>
          <img src={InteractinDesign.src} className="absolute z-0" />
        </div>
      </div>
    </div>
  );
};
export default Intro;