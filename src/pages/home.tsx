import Navbar from "../components/navbar";
import Slider from "../components/slider";
import css from "../styles/home.page.module.css"

export default function HomePage() {
    return (
        <main className={css.main}>
            <Navbar />
            <Slider />
        </main>
    );
}