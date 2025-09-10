export const dynamic = "force-dynamic";

import Head from "next/head";
import BrowserCheck from "./section/browser-check";
import SectionPage from "./section/page";

export default function Page() {
  return (
    <>
      <Head>
        <title>Undangan Ebot & Nina</title>
        <meta name="description" content="Save The Date - Ebot & Nina" />
        {/* Open Graph */}
        <meta property="og:title" content="Undangan Ebot & Nina" />
        <meta
          property="og:image"
          content="https://wedding-ebot-nina.vercel.app/assets/images/image-5.webp"
        />{" "}
        <meta
          property="og:url"
          content="https://wedding-ebot-nina.vercel.app/"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Undangan Ebot & Nina" />
        <meta
          name="twitter:image"
          content="https://wedding-ebot-nina.vercel.app/assets/images/image-5.webp"
        />
      </Head>
      <BrowserCheck />
      <SectionPage />{" "}
    </>
  );
}
