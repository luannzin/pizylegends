import React, { useRef } from "react";
import styles from "../../styles/Champions.module.scss";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  const [data, setData] = React.useState([]);
  const [maximum, setMaximum] = React.useState(-8);
  const [reached, setReached] = React.useState(false);
  const sentinel = React.useRef();

  const renderAllChampions = React.useCallback(async () => {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.18.1/data/pt_BR/champion.json"
    );

    const json = await response.json();
    Object.entries(json["data"]).map((js) => {
      setData((data) => [...data, js[1]]);
    });
  });

  React.useEffect(() => {
    renderAllChampions();
  }, []);

  React.useEffect(() => {
    if (maximum > data.length) {
      setReached(true);
    } else {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          clearTimeout(referencia);
          const referencia = setTimeout(() => {
            setMaximum((maximum) => maximum + 8);
          }, 600);
        }
      });

      observer.observe(sentinel.current);
      return () => observer.disconnect();
    }
  });

  if (data !== null) {
    return (
      <div className={styles.container}>
        <h1 className={styles.allChampions}>Todos os Campeões</h1>
        <div className={styles.champions}>
          {data.slice(0, maximum).map((ch) => {
            return (
              <Link href={`/champions/${ch.id}`}>
                <div className={styles.champion}>
                  <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/${ch.id}.png`}
                    quality={100}
                    layout={"fixed"}
                    width={120}
                    height={120}
                  />
                  <div className={styles.championInfo}>
                    <h1>{ch.id}</h1>
                    <div className={styles.championDesc}>
                      <p>{ch.title}</p>
                      <p className={styles.championClass}>{ch["tags"][0]}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          {!reached ? (
            <div ref={sentinel} className={styles.sentinel}></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
};

export default index;
