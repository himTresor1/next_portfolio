import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Behance from "@/assets/behance.svg";
import CodePen from "@/assets/codepen.svg";
const Contact = () => {
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
    <div className="bg-[rgb(35,40,54)] pt-[10rem] pb-10 mt-[10rem]">
      <div className="max-w-[100rem] px-20 flex flex-col gap-28 mx-auto">
        <div className=" flex flex-col items-center ">
          <div className="text-3xl font-semibold mb-3 text-[rgb(54,91,254)]">
            Let`s Talk
          </div>
          <div className="font-bold text-6xl text-white">Contact</div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex items-end gap-4  w-[calc(50%-50px)] flex-col">
            <TextField className="w-full" variant="filled" label="Name" />
            <TextField
              className="w-full"
              variant="filled"
              label="E-mail Address"
            />
            <TextField
              className="w-full"
              id="outlined-multiline-static"
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
                fontSize: 17
              }}
              variant="contained"
              className="border-tl-[16px] border-br-[16px] "
            >
              SEND MESSAGE
            </Button>
          </div>
          <div className="grid gap-5 w-1/2 grid-cols-2">
            {contacts.map((contact, index) => (
              <a
                href=""
                className="flex w-full rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-4 text-white items-start gap-3"
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
                  <div>{contact.link}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
