export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "Aatrox",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id: id,
    },
  };
}

import React from "react";
import styles from "../../styles/Champion.module.scss";

const champion = ({ id }) => {
  const [data, setData] = React.useState(null);
  const [desc, setDesc] = React.useState(-1);

  const handleClick = ({ target }) => {
    if (target.localName === "div") {
    } else {
      setDesc(
        Array.prototype.indexOf.call(target.parentElement.children, target) - 1
      );
    }
  };

  const renderChampion = React.useCallback(async () => {
    const resposta = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/12.18.1/data/pt_BR/champion/${id}.json`
    );

    const json = await resposta.json();

    console.log(json["data"][id]);
    setData(json["data"][id]);
  }, []);

  React.useEffect(() => {
    renderChampion();
  }, []);

  if (data !== null) {
    return (
      <div className={styles.container}>
        <div
          style={{
            background: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={styles.background}
        ></div>
        <div className={styles.champion}>
          <div className={styles.preview}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
              alt=""
            />
          </div>
          <div className={styles.championInfo}>
            <h1>{id}</h1>
            <p>{data.title}</p>
            <div className={styles.championSkills}>
              <h2>Habilidades</h2>
              <div onClick={handleClick} className={styles.championSkillsImage}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/passive/${data.passive.image.full}`}
                  alt=""
                />
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${data.spells[0]["image"]["full"]}`}
                  alt=""
                />
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${data.spells[1]["image"]["full"]}`}
                  alt=""
                />
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${data.spells[2]["image"]["full"]}`}
                  alt=""
                />
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${data.spells[3]["image"]["full"]}`}
                  alt=""
                />
              </div>
              <div className={styles.championSkillsDesc}>
                <p className={styles.bold}>
                  {desc > -1
                    ? data["spells"][desc]["name"]
                    : data["passive"]["name"]}
                </p>
                <p>
                  {desc > -1
                    ? data["spells"][desc]["description"]
                    : data["passive"]["description"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default champion;
