import React from "react";
import styles from "../../styles/Champions.module.scss";
import Image from "next/image";
import Aatrox from "../../components/images/aatroxLittle.png";

const index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.allChampions}>Todos os Campeões</h1>
      <div className={styles.champions}>
        <div className={styles.champion}>
          <Image
            src={Aatrox}
            quality={100}
            layout={"fixed"}
            width={120}
            height={120}
          />
          <div className={styles.championInfo}>
            <h1>Aatrox</h1>
            <div className={styles.championDesc}>
              <p>The Darkin Blade</p>
              <p>Fighter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
