import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import styles from "../styles/Category.module.css";
// import Brownies from "../../public/brownies.jpg";

export default function ProductsParallaxBg({ image, title }) {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);

  const img1 = "/torta.jpg";
  const img2 =
    "https://images.unsplash.com/photo-1581797833924-255242b10b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

  useEffect(() => {
    if (image) {
      setImg(img1);
      setLoad(false);
    } else {
      setImg(img2);
      setLoad(false);
    }
  }, [image]);
  const handleImageLoad = () => {
    setLoad(true);
  };

  return (
    <Parallax
      className={`${styles.image} ${load ? styles.fadeIn : ""}`}
      bgImage={img}
      // bgImage={image2 || image1}
      strength={200}
      onLoad={handleImageLoad}
    >
      <div
        className={styles.ParallaxDiv}
        style={{
          height: 400,
          display: "flex",
          justifyContent: "center",
          // background: "rgb(0, 0, 0, .2)",
        }}
      >
        {/* <div className={styles.landingDivFilter} /> */}

        <div className={styles.titleDiv}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </Parallax>
  );
}
