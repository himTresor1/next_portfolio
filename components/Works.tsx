import work1 from "@/assets/0001.webp";
import work2 from "@/assets/0002.webp";
import { Button } from "@mui/material";

const Works = () => {
  const works = [
    {
      year: 2019,
      name: "Remizihoca Platform",
      work: "fron-tend developer",
      desc: "Pixelate Creative",
      cover: work1.src,
    },
    {
      year: 2021,
      desc: "Fabrikod",
      name: "IDDEF",
      work: "mobile developer",
      cover: work2.src,
    },
  ];
  return (
    <div id="works" className="flex flex-col mb-[10rem] items-center">
      <div className="flex flex-col w-full items-center gap-7">
        <div className="text-2xl font-semibold text-[rgb(54,91,254)]">
          Fantastic
        </div>
        <div className="font-bold text-5xl text-white">Selected Works</div>
        <div className="w-full sm:flex-row flex-col items-center sm:gap-0 gap-24 sm:items-start flex justify-between">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-[rgb(33,39,55)] relative xl:h-[22rem] sm:h-[35vw] p-10 rounded-tl-[30px] rounded-br-[30px] sm:max-w-auto max-w-[30rem] sm:w-[45vw] xl:w-[37rem]"
            >
              <div className="flex gap-5 relative flex-col">
                <div className="flex justify-between">
                  <div className="text-white font-bold text-lg ">
                    {work.name}
                  </div>
                  <div className="font-bold text-white opacity-40">
                    {work.year}
                  </div>
                </div>

                <div className="flex  flex-col">
                  <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm  ml-auto rounded-tl-[15px] p-3 absolute top-16 right-7  text-white rounded-br-[15px]">
                    {work.desc}
                  </div>
                  <img
                    className="sm:h-[30vw] xl:h-[22rem] rounded-tl-[30px] rounded-br-[30px]"
                    src={work.cover}
                  />
                  <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm  mr-auto rounded-tl-[15px] p-3 absolute bottom-6 left-0  translate-x-5 text-white rounded-br-[15px]">
                    {work.work}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:mt-[8rem] mt-[5rem]">
        <Button
          style={{
            background: "rgb(31,98,250)",
            color: "white",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 16,
            padding: "10px 25px",
            fontSize: 17,
          }}
          variant="contained"
          className="border-tl-[16px] border-br-[16px] "
        >
          SEE MORE
        </Button>
      </div>
      <div className="text-[rgb(57,63,79)] text-4xl mt-[8rem]">
        ”Be who you needed when you were younger”
      </div>
    </div>
  );
};
export default Works;
