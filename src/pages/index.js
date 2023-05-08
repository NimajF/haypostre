import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import ParallaxBg from "@/components/ParallaxBG";
import ProductNav from "@/components/ProductNav";
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
          <div className={styles.howToBuyDiv}>
            <div className={styles.howToBuyInfo}>
              <h4>¿Cómo comprar?</h4>
              <ul>
                <li>
                  Para realizar un pedido es tan fácil como agregar al carrito y
                  clickear en comprar. El pedido se reserva con una seña del 50%
                  la cual se descontará del total.
                </li>
                <li>
                  Luego podrás mandarme un mensaje por WhatsApp. Podrás también
                  personalizar el pedido si es posible.
                </li>
                <li>
                  Una vez enviado el pedido me pondré en contacto para coordinar
                  métodos de pago y dirección de envío.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
