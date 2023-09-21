import { Parallax } from "react-parallax";
import styles from "../styles/Home.module.css";
// import Brownies from "../../public/brownies.jpg";

export default function ParallaxBg({ scrollRef, cartBg }) {
  const image1 = "/breakfast.jpg";
  const img1 =
    "https://images.unsplash.com/photo-1587248721852-ffc60bffc129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const image2 =
    "https://images.unsplash.com/photo-1623888885364-56cf1a38b6ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <Parallax
      className={styles.image}
      bgImage={cartBg ? cartBg : image2}
      // bgImage={image2 || image1}
      blur={{ min: -15, max: 15 }}
      strength={cartBg ? 200 : -100}
    >
      <div
        className={styles.ParallaxDiv}
        style={{
          height: !cartBg ? 500 : 300,
          display: "flex",
          justifyContent: "center",
          // background: "rgb(0, 0, 0, .2)",
        }}
      >
        <div className={styles.landingDivFilter} />
        {!cartBg ? (
          <div className={styles.titleDiv}>
            <h1 className={styles.title}>Hay Postre</h1>
            <h2>Pastelería artesanal Rosario</h2>
            <p>🍰 Postres - Tortas - Budines 🥮</p>
          </div>
        ) : (
          <div className={styles.titleDiv} style={{ paddingTop: "2rem" }}>
            <h1 className={styles.title} style={{ fontSize: "3rem" }}>
              Carrito de Compras
            </h1>
          </div>
        )}
      </div>
    </Parallax>
  );
}
