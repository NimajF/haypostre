import Link from "next/link";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>
            <b>Productos</b>
          </li>
          <li>
            <Link href="/tortas">Tortas y Postres</Link>
          </li>
          <li>
            <Link href="/budines-confiteria">Budines y Confitería</Link>
          </li>
        </ul>
        {/* <ul>
          <li>
            <b>Ayuda</b>
          </li>
          <li>
            <a>Como comprar</a>
          </li>
          <li>
            <a>Sobre mi</a>
          </li>
        </ul> */}
        <ul>
          <li>
            <b>Contacto</b>
          </li>
          <li>
            <FiInstagram />
            <a
              href="https://www.instagram.com/_hay_postre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <FaWhatsapp />
            <a
              href="https://wa.link/dbef8i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </li>
          <li>
            {/* <FaWhatsapp /> */}
            <a
              href="https://wa.link/dbef8i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empresariales/Bares
            </a>
          </li>
          {/* <li>
            <FiMail />
            <a href="mailto:dulcevictorinaok@gmail.com">Correo</a>
          </li> */}
        </ul>
      </div>
      <a
        href="https://benjaminpuricelli.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Derechos reservados - Benjamín Francisco Puricelli</p>
      </a>
    </div>
  );
}
