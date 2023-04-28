import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Interface from "../components/interface";

import { Asset } from "../lib/types/assets";
import { Scene } from "../lib/types/scenes";
import utilStyles from "../styles/utils.module.css";

export default function Home(allAssetsData: any) {
  let assets = allAssetsData;
  let scenes: Scene[] = [];
  let selected: Asset | Scene | null = null;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Interface></Interface>
    </Layout>
  );
}

export async function getStaticProps() {
  const allAssetsData: any = [];
  return {
    props: {
      allAssetsData,
    },
  };
}
