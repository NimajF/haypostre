import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../store/context";
import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import emailjs from "emailjs-com";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import styles from "../styles/Cart.module.css";

const useTotalPrice = () => {
  const { cart } = useContext(DataContext);
  return Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default function Order() {
  const { cart, resetCart, isCartEmpty } = useContext(DataContext);
  const price = useTotalPrice();
  const cartObj = Object.values(cart);

  const { push } = useRouter();
  const [order, setOrder] = useState(cartObj);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [orderMsg, setOrderMsg] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [msgCopied, setCopy] = useState(false);
  const msgRef = useRef(null);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("cart"));
    if (Object.keys(item).length === 0 && item.constructor === Object) {
      push("/");
    }
  }, []);

  useEffect(() => {
    setOrder(cartObj);
  }, [JSON.stringify(cartObj)]);

  useEffect(() => {
    // let price = 0;
    let msg = [];
    for (let product of cartObj) {
      // price += product.currentPrice;
      msg.push(`${product.quantity} x ${product.title}`);
    }
    // setTotalPrice(price);
    setOrderMsg(msg.join(", "));
  }, [cart]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ouy3puq",
        "template_vwp84r2",
        e.target,
        "ZGvadxRrECos7hd-H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMsgSent(true);
    // resetCart();
    // push("/");
  };

  const handleCopy = (e) => {
    msgRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopy(true);
  };

  const handleRedirect = () => {
    resetCart();
    push("/");
  };

  return (
    <Layout>
      <Head>
        <title>Mi Orden</title>
      </Head>
      {/* <div className={msgSent ? "modal show" : "modal"}>
        <div className={"modal-span"}>
          <span>
            <h5>Mensaje enviado</h5>
          </span>
          <p>
            Listo!! El correo fue enviado con éxito. Me pondré en contacto con
            vos lo antes posible.
          </p>
         
          <button onClick={handleRedirect}>Inicio</button>
        </div>
      </div> */}
      <div className={styles.orderPageTitle}>
        <h1 style={{ fontFamily: "Inter" }}>Casi listo...</h1>
        <h2>Seguimos el pedido vía WhatsApp.</h2>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.order}>
          {order.map((obj, idx) => (
            <span
              key={obj.title}
              className="productSpan"
              style={{
                borderBottom: `${
                  idx !== order.length - 1 ? "1px solid #83838333" : ""
                }`,
              }}
            >
              <p>
                {obj.title} <br></br> <small>Cantidad: {obj.quantity}</small>
              </p>
              <p>${obj.price * obj.quantity}</p>
            </span>
          ))}
          <span style={{ marginTop: `${price > 0 ? "30px" : "0"}` }}>
            <b>Total</b>
            <b>${price}</b>
          </span>
        </div>
        <div className={styles.emailDiv}>
          <h3 className={styles.emailH3} style={{ marginBottom: "20px" }}>
            Detalles del pedido
          </h3>
          {/* <label htmlFor="message">Mensaje</label> */}
          <textarea
            name="message"
            defaultValue={orderMsg}
            ref={msgRef}
            style={msgCopied ? { background: "#bcffbc" } : {}}
          />
          <span className={styles.suggestion} style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}} >
            No te olvides de personalizar y copiar tu pedido antes de continuar. Una vez estés en WhatsApp, pegá el pedido.
            <span onClick={handleCopy}>Copiar pedido</span>
          </span>

          <div className={styles.orderLinks} style={{pointerEvents: !msgCopied ? "none" : "inherit", backgroundColor: !msgCopied ? "#595959" : "rgb(120, 203, 87)"}} >
            <a 
              href="https://wa.link/dbef8i"
              rel="noopener noreferrer"
              target="_blank"
              onClick={handleRedirect}
              disabled={msgCopied}
            >
                Whatsapp
            </a>

            {/* <a
              href="https://instagram.com/dulcevictorinaok?igshid=YmMyMTA2M2Y="
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
