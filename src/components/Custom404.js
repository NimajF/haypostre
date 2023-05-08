import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
// import styles from "../styles/Cart.module.css";

export default function Page404() {
  return (
    <div className="container">
      <Head>Error</Head>
      <div className="error-page">
        <h1>Error 404</h1>
        <h2>Página no encontrada</h2>
        <Link href={"/"}>Voler al inicio</Link>
      </div>
      <Footer style={{ top: "0" }} />
    </div>
  );
}
