import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function App({ Component, pageProps }: AppProps) {
  const [snow, setSnow] = useState(false);
  useEffect(() => {
    setSnow(true);
  }, []);
  if (!snow) return null;
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      {/* <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      /> */}
      <div className="min-h-screen">
        <div className=" max-w-[100rem] mx-auto px-20">
          <Navigation />
          <Component {...pageProps} />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
