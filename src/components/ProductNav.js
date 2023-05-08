import Link from "next/link";
import Image from "next/image";
import { GiStairsCake, GiPresent } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { IoIceCreamSharp } from "react-icons/io5";
import styles from "../styles/Home.module.css";

const productIcons = [
  {
    icon: <GiStairsCake />,
    iconCategory: "budines-confiteria",
    title: "Budines/Confitería",
    image: "/confiteria.jpg",
    alt: "Imagen de una torta",
  },
  // {
  //   icon: <MdFreeBreakfast />,
  //   iconCategory: "desayunos",
  //   title: "Desayunos",
  //   image: "/breakfast.jpg",
  //   alt: "Imagen de un desayuno",
  // },
  {
    icon: <GiPresent />,
    iconCategory: "tortas",
    title: "Tortas y Postres",
    image: "/torta.jpg",
    alt: "Imagen de un box",
  },
  //   {
  //     icon: <IoIceCreamSharp />,
  //     iconCategory: "postres",
  //     title: "Postres",
  //     image: "/desayuno.jpg",
  //     alt: "Imagen de unos brownies postres",
  //   },
];

export default function ProductNav() {
  return (
    <div className={styles.productNav}>
      {productIcons.map((icon, idx) => (
        <Link key={idx} href={`/${icon.iconCategory}`} passHref>
          <div className={styles.productNavCard}>
            <div className={styles.imageDiv}>
              <Image
                src={icon.image}
                width={1000}
                height={500}
                style={{ objectFit: "cover" }}
                alt={icon.alt}
              />
            </div>
            {/* <div className={styles.divv}></div> */}
            <div className={styles.productNavCardDetails}>
              <p>{icon.title}</p>
              <button>Ver más</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
