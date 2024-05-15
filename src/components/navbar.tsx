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

    return (
        <header className={css.navbar}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <h1>
                    <Link to="/">Atlantis</Link>
                </h1>
            </div>
            <nav className={css.nav}>
                <ul>
                    <li className={marcado.clientes ? css.roxo : ""}>
                        <Link to="/clientes" className="text link">Gerenciar Clientes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}