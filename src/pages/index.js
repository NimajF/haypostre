import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import ParallaxBg from "@/components/ParallaxBG";
import ProductNav from "@/components/ProductNav";
import HowToBuy from "@/components/HowToBuy";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hay Postre</title>
        <meta
          name="description"
          content="Pastelería artesanal Rosario. Envíos a domicilio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <ParallaxBg />
          <div className={styles.homeContainer}>
            <ProductNav />

            <h2 style={{ textAlign: "center" }}></h2>
          </div>
          <HowToBuy />
        </main>
      </Layout>
    </>
  );
}
