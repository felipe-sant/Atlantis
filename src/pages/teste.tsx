import Acomodacao from "../components/acomodacao";
import { acomodacao } from "../types/acomodacao";

export default function TestePage() {
    const acomodacoes: acomodacao[] = [
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Solteiro Simples',
            descricao: 'Acomodação simples para solteiro(a).'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Solteiro Duplo',
            descricao: 'Acomodação simples para casal.'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Casal Simples',
            descricao: 'Acomodação simples para casal.'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Casal Duplo',
            descricao: 'Acomodação simples para casal.'
        },
    ]

    return (
        <div style={{padding: 40}}>
            {
                acomodacoes.map((acomodacao, index) => (
                    <Acomodacao key={index} acomodacao={acomodacao} />
                ))
            }
        </div>
    )
}