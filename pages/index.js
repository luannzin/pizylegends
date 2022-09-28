import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Riven from "../components/images/riven.png";
import Champions from "../components/images/champions.png";
import poroItem from "../components/images/poro_item.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.presentationText}>
          <h1>Simples e Rápido</h1>
          <p>Explore, Descubra, Surpreenda-se.</p>
          <Link href="/champions">
            <button>Explorar</button>
          </Link>
        </div>
        <Image src={Riven} layout="fixed" quality={100} />
      </div>
      <div className={styles.data}>
        <h1 className={styles.lolData}>League of Legends Data</h1>
        <div className={styles.options}>
          <Link href="/champions">
            <div className={styles.card}>
              <Image className={styles.image} src={Champions} />
              <h1>Campeões</h1>
              <p>
                Encontre informações sobre todos os campeões do League of
                Legends.
              </p>
            </div>
          </Link>
          <Link href="/itens">
            <div className={styles.card}>
              <Image className={styles.imagePoro} src={poroItem} />
              <h1>Itens</h1>
              <p>
                Encontre informações sobre todos os itens do League of Legends.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
