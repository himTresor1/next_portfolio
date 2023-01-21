import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { alpha, Button, styled, TextField } from "@mui/material";
import Behance from "@/assets/behance.svg";
import CodePen from "@/assets/codepen.svg";
import ContactPattern from "@/assets/contact_pattern.webp";
import useCopy from "use-copy";
import Copy from "@/assets/copy.svg";

const Contact = () => {
  const [copied, copy, setCopied] = useCopy("muhammed@erdem.dev");
  const copyText = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const RedditTextField = styled((props: any) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<any>}
      {...props}
    />
  ))(({ theme }) => ({
    "& label.Mui-focused": {
      color: "rgb(58, 65, 82)",
    },
    "& label": {
      color: "rgb(58, 65, 82)",
    },
    "& .MuiFilledInput-root": {
      borderBottom: "0.2px solid rgb(107,114,128)",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),

      "&.Mui-focused": {
        borderColor: "white",
      },
    },
  }));

  const contacts = [
    {
      provider: "Github",
      link: "github.com/muhammed",
    },
    {
      provider: "Codepen",
      link: "codepen.com/muhammed",
    },
    {
      provider: "Instagram",
      link: "instagram.com/muhammed",
    },
    {
      provider: "Twitter",
      link: "instagram.com/muhammed",
    },
    {
      provider: "Linkedin",
      link: "instagram.com/muhammed",
    },
    {
      provider: "Behance",
      link: "instagram.com/muhammed",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-[rgb(35,40,54)] pt-[15rem] w-full pb-10 mt-[10rem]"
    >
      <div className="max-w-[100rem] relative sm:px-20 flex flex-col gap-28 mx-auto">
        {/* <div className="absolute -top-[22rem] left-16 right-16 flex items-center justify-between px-10 w-[80%] rounded-tl-[40px] rounded-br-[40px] h-[15rem]">
          <div className="flex pl-10 z-50 gap-3 flex-col">
            <div className="text-white font-bold text-3xl">
              DO YOU HAVE A PROJECT
            </div>
            <div className="text-[rgb(127,142,234)] text-lg font-medium">
              I`m ready for new projects
            </div>
          </div>
          <div className="rounded-tl-[13px] z-50 text-white px-5 py-2 bg-[rgb(43,107,233)] rounded-br-[13px]">
            LET'S TALK
          </div>
          <img
            src={ContactPattern.src}
            className=" w-full h-[15rem] opacity-80 absolute rounded-tl-[40px] rounded-br-[40px] object-cover z-0 object-top"
            alt=""
          />
          <div className="bg-[#0000ff93] rounded-tl-[40px] rounded-br-[40px] absolute top-0 z-40 w-full h-full "></div>
        </div> */}
        <div className=" flex flex-col items-center ">
          <div className="text-3xl font-semibold mb-3 text-[rgb(54,91,254)]">
            Let`s Talk
          </div>
          <div className="font-bold text-6xl text-white">Contact</div>
        </div>
        <div className="flex lg:flex-row flex-col w-full items-start gap-14">
          <div className="flex items-end gap-5 w-full lg:w-[calc(50%-20px)] flex-col">
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              variant="filled"
              label="Name"
            />
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              variant="filled"
              label="E-mail Address"
            />
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              // id="outlined-multiline-static"
              label="Message"
              variant="filled"
              multiline
              rows={4}
            />
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
              SEND MESSAGE
            </Button>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {contacts.map((contact, index) => (
                <a
                  href=""
                  className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
                  key={index}
                >
                  {contact.provider === "Github" ? (
                    <GitHub sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Twitter" ? (
                    <Twitter sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Instagram" ? (
                    <Instagram sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Linkedin" ? (
                    <LinkedIn sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Behance" ? (
                    <img src={Behance.src} className="w-10" />
                  ) : (
                    <img src={CodePen.src} className="w-10" />
                  )}
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">
                      {contact.provider}
                    </div>
                    <div className="text-gray-500">{contact.link}</div>
                  </div>
                </a>
              ))}
            </div>
            <div
              onClick={copyText}
              className={`w-full flex items-center rounded-tl-[20px] hover:bg-[rgb(54,91,254)] hover:text-white group rounded-br-[20px] h-[3.5rem] mt-4  cursor-pointer ${
                copied
                  ? "text-white bg-[rgb(54,91,254)]"
                  : "bg-[rgb(44,48,62)] text-[rgb(102,111,133)]"
              }`}
            >
              <div
                className={`h-full bg-[rgb(102,111,133)] group-hover:bg-[rgb(54,91,254)] rounded-tl-[20px] flex items-center px-4 ${
                  copied && "bg-[rgb(54,91,254)]"
                }`}
              >
                <img src={Copy.src} className="w-7" />
              </div>
              <div className="text-center w-full font-bold text-lg">
                {copied ? "copied" : "muhammed@erdem.dev"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
