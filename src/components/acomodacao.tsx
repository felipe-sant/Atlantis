import css from '../styles/acomodacao.component.module.css'
import { acomodacao } from '../types/acomodacao'


export default function Acomodacao(props: {acomodacao: acomodacao}) {
    const acomodacao = props.acomodacao

    return (
        <div className={css.acomodacao}>
            <img src={acomodacao.imagem} alt={acomodacao.titulo + " imagem"} />
            <div className={css.info}>
                <h3>{acomodacao.titulo}</h3>
                <p>{acomodacao.descricao}</p>
            </div>
        </div>
    )
}