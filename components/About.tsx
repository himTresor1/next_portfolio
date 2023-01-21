import user from "@/assets/profile_photo.webp";
import shape4 from "@/assets/shape_4.png";
import shape5 from "@/assets/shape_5.png";
import shape6 from "@/assets/shape_6.png";
import shape7 from "@/assets/shape_7.png";

const About = () => {
  const skills = ["React", "Vue", "React Native", "CSS3"];
  return (
    <div id="about" className="flex pt-[25rem] pb-[5rem] md:gap-10 md:flex-row flex-col items-center  relative justify-between">
      <div className="w-[28rem] relative">
        <img className="min-w-full" src={user.src} />
        <div className="absolute"></div>
      </div>
      <div className="flex gap-3 xl:max-w-[42rem] w-full sm:max-w-[60%] flex-col">
        <div className="text-[rgb(54,91,254)] text-2xl">Know Me</div>
        <div className="font-bold text-5xl text-white">About</div>
        <div className="text-gray-300 flex flex-col gap-4 text-lg leading-8">
          <p className="md:text-left text-center">
            I'm a Front-End Developer located in Turkey. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
          </p>
          <p className="md:text-left text-center">
            My main experience is in front-end development but I also have a
            passion for design. Given that producing a modern website requires
            the combination of design, server technology, and the layer that
            users interacts with. I believe having experience in both design and
            development allows for making the most optimal user experiences.
          </p>
          <p className="md:text-left text-center">
            I've built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
            I'm{" "}
          </p>
          <p className="text-center">
            I'm a{" "}
            <a href="" className="underline text-[rgb(53,91,254)]">
              CodePen
            </a>{" "}
            advocate and share attention-catching demos over on
            <a href="" className="underline text-[rgb(53,91,254)]">
              {" "}
              Twitter
            </a>
            .
          </p>
          <div className="flex gap-5 mt-4 flex-col">
            <div className="font-bold text-2xl text-white">Best Skills</div>
            <div className="flex items-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-tl-[20px] text-sm hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
