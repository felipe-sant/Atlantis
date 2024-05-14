import css from "../styles/slider.component.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/slider2.jpg"
import slider3 from "../images/slider3.jpg"

export default function Slider() {
    const imagens = [
        { src: slider1, alt: "Imagem 1" },
        { src: slider2, alt: "Imagem 2" },
        { src: slider3, alt: "Imagem 3" }
    ]

    return (
        <div className={css.slider}>
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 10000 }}
            >
                {
                    imagens.map((imagem, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className={css.image}
                                src={imagem.src}
                                alt={imagem.alt}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={css.background}>
                <h1 className={css.title}>Bem vindo ao Atlantis!</h1>
                <p className="text">O seu site de gerenciamento de parques aquáticos!</p>
            </div>
        </div>
    )
}