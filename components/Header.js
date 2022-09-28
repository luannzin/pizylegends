import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import poroLogo from "./images/poroLogo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src={poroLogo}
              layout={"fixed"}
              quality={100}
              height={64}
              width={64}
            />
            <h1>PIZY LEGENDS</h1>
          </div>
        </Link>
        <ul>
          <Link href="/champions">
            <li>Campeões</li>
          </Link>
          <Link href="/itens">
            <li>Itens</li>
          </Link>
          <Link href="/contato">
            <button>Contato</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
