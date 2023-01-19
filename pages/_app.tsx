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
          zIndex: -1,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
