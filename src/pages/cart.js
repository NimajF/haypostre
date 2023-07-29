import Head from "next/head";
import Layout from "../components/Layout";
import Cart from "../components/Cart";
import ParallaxBg from "@/components/ParallaxBG";
import styles from "../styles/Cart.module.css";

export default function CartPage() {
  // Imagen de <a href="https://www.freepik.es/foto-gratis/deprimente-composicion-lunes-azul_20554502.htm#query=bakery%20box&position=0&from_view=search&track=ais">Freepik</a>
  const cartBg =
    "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  return (
    <Layout>
      <Head>
        <title>Carrito de compras</title>
      </Head>
      <ParallaxBg cartBg={cartBg} />
      <h2 className={styles.cartTitle}>Mi carrito</h2>
      <Cart />
    </Layout>
  );
}
