import { useState, useEffect, useContext, memo } from "react";
import { DataContext } from "../store/context";
import Link from "next/link";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import styles from "../styles/Cart.module.css";

const useTotalPrice = () => {
  const { cart } = useContext(DataContext);
  return Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

function Cart() {
  const { auth, cart, removeFromCart, selectQuantity, isCartEmpty, resetCart } =
    useContext(DataContext);
  const totalPrice = useTotalPrice();
  // const [totalPrice, setTotalPrice] = useState(0);
  const cartObj = Object.values(cart);
  const ifCartEmpty = cartObj.length === 0;

  const handleSelectQuantity = (e, productId) => {
    selectQuantity(e.target.value, productId);
  };

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const emptyCart = () => {
    resetCart();
  };

  const cartProducts = cartObj.map((product) => (
    <div key={product._id} className={styles.cartProduct}>
      <RxCross2 onClick={() => handleDelete(product._id)} />
      <div className={styles.productImage}>
        <Image
          src={product.images[0].url}
          // layout="fill"
          // objectFit="cover"
          height={100}
          width={200}
          style={{ objectFit: "cover" }}
          priority
          alt={`Imagen del producto ${product.title}`}
        />
      </div>
      <div className={styles.productInfo}>
        <Link href={`/product/${product.link}`} className={styles.productTitle}>
          {product.title}
        </Link>
        <span>$ {product.currentPrice}</span>
        <div className={styles.qtySelect}>
          <label htmlFor="Cantidad">Cantidad</label>
          <select
            name="cantidad"
            value={product.quantity}
            onChange={(e) => handleSelectQuantity(e, product._id)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            {product.quantity > 10 && (
              <option value={`${product.quantity}`}>{product.quantity}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.cartDiv}>
      {!ifCartEmpty && (
        <p style={{ fontFamily: "Poppins" }}>
          Los pedidos se realizan con 48/72 horas de anticipación.
        </p>
      )}
      <section className={styles.cartContainer}>
        {ifCartEmpty ? (
          <div className={styles.emptyCartDiv}>
            <h3
              style={{
                color: "#3c4858",
                fontFamily: "Poppins",
                fontSize: "1.5rem",
              }}
            >
              Su carrito esta vacío
            </h3>
            <Link href="/tortas">Seguir comprando</Link>
          </div>
        ) : (
          <div className={styles.cart}>
            {/* <button className={styles.emptyCartButton} onClick={emptyCart}>
            Vaciar carrito
          </button> */}

            <div className={styles.cartItems}>{cartProducts}</div>
            <div className={styles.purchaseDiv}>
              <span>
                <b>Total</b>
                <b>${totalPrice}</b>
              </span>
              {/* <h4
              style={{
                fontFamily: "Inter",
                fontSize: "1.4rem",
                color: "#4c4c4c",
              }}
            >
              Total: <i style={{ fontWeight: "400" }}>${totalPrice}</i>
            </h4> */}
              <Link href="/order" className={styles.purchaseBtn}>
                Finalizar pedido
                {/* <AiOutlineWhatsApp /> */}
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default memo(Cart);
// CartPage.getInitialProps = ({ req }) => {
//   const cookies = Cookies.get("cart");
//   return {
//     initialCart: cookies,
//   };
// };
