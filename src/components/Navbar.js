import { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { DataContext } from "../store/context";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function Navbar({ scrollRef }) {
  const { data: session, status } = useSession();
  const { cart } = useContext(DataContext);
  const [cartNumber, setCartNumber] = useState(0);
  const cartObj = Object.values(cart);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setSticky(true) : setSticky(false);
    }
  };

  useEffect(() => {
    let cartNum = 0;
    for (let product of cartObj) {
      cartNum += product.quantity;
    }
    setCartNumber(cartNum);
  }, [cart, cartObj]);

  return (
    <nav className={sticky ? "sticky" : ""}>
      <div className="logo-div">
        <Link href="/" passHref>
          <span className="logo">
            <Image
              src={"/haypostre.jpg"}
              height={65}
              width={65}
              alt="Logo Hay Postre"
            />
          </span>
        </Link>
        <Link href="#" className="howToBuy-link">
          Cómo comprar
        </Link>
      </div>

      <div className="nav_links">
        {session && (
          <div>
            <Link href="/api/auth/signout">Log out</Link>
            <Link href="/create" passHref>
              <span>
                <MdCreate />
              </span>
            </Link>
          </div>
        )}
        <Link href="/cart" passHref>
          <span className="bag-wrapper">
            <FaShoppingCart />
            {cartNumber > 0 && (
              <b className={cartNumber > 0 && "show-number"}>{cartNumber}</b>
            )}
          </span>
        </Link>
      </div>
    </nav>
  );
}
