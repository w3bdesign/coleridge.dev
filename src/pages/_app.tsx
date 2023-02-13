import React from "react";
import "@/styles/design.css";
import Navbar from "@/components/Nav";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Head>
        <title>Kai Coleridge</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Kai Coleridge's Portfolio" />
        <meta name="author" content="Kai Coleridge" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#12181d"></meta>
        <meta name="keywords" content="Kai Coleridge, full stack developer, web developer"></meta>
      </Head>
    </>
  );
}
