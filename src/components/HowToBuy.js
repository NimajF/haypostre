import { BsBoxSeam } from "react-icons/bs";
import { RiWhatsappLine } from "react-icons/ri";
import { TbPuzzle } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles/Home.module.css";

export default function HowToBuy() {
  return (
    <div className={styles.howToBuyDiv}>
      <h4>¿Cómo comprar?</h4>
      <div className={styles.howToBuyInfo}>
        <div className={styles.infoBox}>
          {" "}
          <BsBoxSeam />
          <p>
            Para realizar un pedido es tan fácil como agregar los productos al carrito de compras.
          </p>
        </div>
        <div className={styles.infoBox}>
          {" "}
          <AiOutlineEdit />
          <p>
            Al momento de finalizar el pedido, podrás envíar comentarios para
            terminar de personalizar las características del mismo y de sus
            productos.
          </p>
        </div>
        <div className={styles.infoBox}>
          <RiWhatsappLine />
          <p>
            Luego podrás mandarnos un mensaje por WhatsApp. Una vez enviado el
            pedido nos pondremos en contacto para coordinar métodos de pago y
            dirección de envío.
          </p>
        </div>
      </div>
    </div>
  );
}
