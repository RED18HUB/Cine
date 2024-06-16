import Card from "components/Card";
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import styles from "./Favoritos.module.css"
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favorite" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;