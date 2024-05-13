import { Link } from "react-router-dom";
import css from "../styles/pages/_notFound.module.css"

export default function NotFoundPage() {
    return (
        <main className={"flex flex-center flex-column " + css.main}>
            <h1>404 Not Found</h1>
            <Link className={"link text " + css.link} to="/">Ir para página inícial</Link>
        </main>
    );
}