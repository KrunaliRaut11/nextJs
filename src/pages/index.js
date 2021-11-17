import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <title>Clear Choice Imagine</title> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon.png"
        />
      </Head>

      <main></main>
      <Navbar />
    </div>
  );
}
