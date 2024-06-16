import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import Pie from "components/Pie/Pie"
import FavoritoProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase () {
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
                <Pie/>
            </FavoritoProvider>
        </main>
    )
}

export default PaginaBase