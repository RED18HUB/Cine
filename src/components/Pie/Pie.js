import styles from "./Pie.module.css"
import logo from "./logo-alura.png"

function Pie ()
{
    return (
        <footer className={styles.pie}>
            <h3>Desarrollado por 
            <img src={logo} alt="img-footer"></img></h3>
            

        </footer>
    )
}

export default Pie