import { Link } from "react-router-dom"
import email from "../images/email.png"
import site from "../images/site.png"
import telefone from "../images/telefone.png"

import css from "../styles/footer.component.module.css"

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.copyright}>
                <h2>Ocean Solutions</h2>
                <p>© 2024 Atlantis. Todos os direitos reservados.</p>
            </div>
            <div className={css.contatos}>
                <div>
                    <img src={email} alt="" />
                    <span className="text">atlantis.contact@ocean.com</span>
                </div>
                <div>
                    <img src={site} alt="" />
                    <span className="text">
                        <Link 
                            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            className="link"
                            target="_blank"
                        >
                            Ocean Solutions
                        </Link>
                    </span>
                </div>
                <div>
                    <img src={telefone} alt="" />
                    <span className="text">(99) 99999-9999</span>
                </div>
            </div>
        </footer>
    )
}