import Router from "./router";
import "./styles/globals.css";
import { register } from "swiper/element/bundle";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

register()

function App() {
  return (
    <Router />
  );
}

export default App;
