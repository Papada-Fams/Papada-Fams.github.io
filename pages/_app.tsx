import "@/styles/globals.css";
import "@/styles/loading.css";
import type { AppProps } from "next/app";
import { Context } from "@/context/Auth";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
