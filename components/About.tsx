import user from "@/assets/profile_photo.webp";
const About = () => {
  return (
    <div className="flex mt-[15rem] justify-between">
      <img className="w-[32rem]" src={user.src} />
      <div className="flex gap-3 max-w-[45rem] flex-col">
        <div className="text-[rgb(54,91,254)] text-2xl">Know Me</div>
        <div className="font-bold text-5xl text-white">About</div>
        <div className="text-gray-300 text-xl leading-8">
          I'm a Front-End Developer located in Turkey. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences. <br /> <br />
          My main experience is in front-end development but I also have a
          passion for design. Given that producing a modern website requires the
          combination of design, server technology, and the layer that users
          interacts with. I believe having experience in both design and
          development allows for making the most optimal user experiences.
          <br /> <br />
          I've built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences. I'm{" "}
          <br />
          <br />
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
        </div>
      </div>
    </div>
  );
};
export default About;
