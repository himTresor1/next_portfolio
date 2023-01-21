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
import shape3 from "@/assets/shape_3 (1).png";
import shape4 from "@/assets/shape_4.png";
import shape5 from "@/assets/shape_5.png";
import shape6 from "@/assets/shape_6.png";
import shape7 from "@/assets/shape_7.png";

const Intro = () => {
  return (
    <div className="flex pt-[15rem] relative flex-col md:items-start items-center gap-3">
      <img
        src={shape4.src}
        className="absolute w-28 -z-10 -bottom-14 -left-5"
        alt=""
      />
      <img
        src={shape5.src}
        className="absolute w-20 -bottom-32 left-[18rem]"
        alt=""
      />
      <img
        src={shape6.src}
        className="absolute w-32 -bottom-[22rem] right-[22rem] "
        alt=""
      />
      <img src={shape7.src} className="absolute w-12 bottom-0 right-0" alt="" />
      <img src={shape1.src} className="md:w-28 w-16 absolute top-[7rem] left-12" />
      <img src={shape2.src} className="w-14 absolute top-[5rem] sm:left-[36rem]" />
      <div className="flex items-center gap-2 text-5xl">
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
      <div className="flex gap-3 flex-col">
        <div className="text-white text-5xl text-center font-bold">I`m Muhammed Erdem</div>
        <div className="text-[rgb(54,91,254)] text-lg">Front-end Engineer</div>
        <div className="text-gray-300 md:max-w-[35rem] md:text-left text-center text-lg leading-8">
          Specialized in front-end development but also like trying out other <br />
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
        <img
          src={shape3.src}
          className="absolute sm:h-[7rem] h-[5rem] -right-10 sm:top-[16rem] top-16"
          alt=""
        />
      <div className="absolute w-1/2 top-[20rem] h-[30rem] md:flex hidden justify-center items-center right-0">
        <img src={first.src} className="xl:w-[14rem] w-[17vw]" />
        <div className="absolute flex-col h-[10rem] w-[15vw] xl:w-[12rem] flex items-center justify-center gap-5  top-8 left-32">
          <img src={webanimationIcon.src} className="w-12 z-50" />
          <div className="z-50 text-lg text-white font-bold max-w-[5rem] text-center">
            Web Animation
          </div>
          <img src={WebAnimation.src} className="absolute h-full w-full z-0" />
        </div>
        <div className="absolute flex-col h-[15rem] w-[20vw] xl:w-[15rem] flex items-center justify-center gap-5  -top-10 -right-3">
          <img src={FaDevIcon.src} className="xl:w-20 w-16 z-50" />
          <div className="z-50 text-white font-bold max-w-[7rem] text-center">
            Front-end Development
          </div>
          <img src={FeDev.src} className="absolute w-full z-0 h-full" />
        </div>
        <div className="absolute flex-col h-[13rem] w-[15vw] xl:w-[13rem] flex items-center justify-center gap-5  -bottom-5 right-[4rem]">
          <img src={mobileDevIcon.src} className="w-7 z-50" />
          <div className="z-50 text-white text-lg font-bold max-w-[7rem] text-center">
            Mobile Development
          </div>
          <img src={MobileDev.src} className="absolute w-full z-0" />
        </div>
        <div className="absolute flex-col h-[15rem] w-[14vw] xl:w-[12rem] flex items-center justify-center gap-5 -bottom-5 left-[2.5rem]">
          <img src={InteractionDesignIcon.src} className="w-10 z-50" />
          <div className="z-50 text-white font-bold max-w-[7rem] text-center">
            Interaction Design
          </div>
          <img src={InteractinDesign.src} className="absolute w-full z-0" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
