import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Trevor";
export const siteTitle = "Canvas Bubble Concept";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icons8-bubbles-emoji-32.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <header className={styles.header}>
        <Image
          priority
          src="/icons8-bubbles-emoji-96.png"
          // className={utilStyles.borderCircle}
          height={96}
          width={96}
          alt={name}
        />
        <h1>Canvas Bubble Scenes</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
