import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import styles from "../styles/Category.module.css";
// import Brownies from "../../public/brownies.jpg";

export default function ProductsParallaxBg({ image, title }) {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);

  const img1 = "/tortasBG.jpeg";
  const img2 = "/budinesBG.jpeg";

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
      blur={{ min: -13, max: 15 }}
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
        <div className={styles.landingDivFilter} />

        <div className={styles.titleDiv}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </Parallax>
  );
}
