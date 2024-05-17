import { Link, useLocation } from "react-router-dom";
import css from "../styles/navbar.component.module.css"
import logo from "../images/logo.png"

export default function Navbar() {
    const pathname = useLocation().pathname

    let marcado = {
        clientes: false
    }

    switch (pathname) {
        case "/clientes":
            marcado.clientes = true
    }

    let teste = 0
    const testar = () => {
        teste += 1
        if (teste === 3) {
            window.location.href = "dev/teste"
            // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            teste = 0
        }
    }

    return (
        <header className={css.navbar}>
            <div className={css.logo}>
                <img src={logo} alt="" onClick={testar} />
                <h1>
                    <Link 
                        to="/"
                        target="_self"
                    >Atlantis</Link>
                </h1>
            </div>
            <nav className={css.nav}>
                <ul>
                    <li className={marcado.clientes ? css.roxo : ""}>
                        <Link 
                            to="/clientes" 
                            className="text link"
                            target="_self"
                        >
                            Gerenciar Clientes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}