import Menu from "../interfaces/menu";

export default class MenuDesignarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| O que você deseja fazer?`)
        console.log(`----------------------`)
        console.log(`| 1 - Designar acomodação de Casal Simples`)
        console.log(`| 2 - Designar acomodação de Família Simples`)
        console.log(`| 3 - Designar acomodação de Família Mais`)
        console.log(`| 4 - Designar acomodação de Família Super`)
        console.log(`| 5 - Designar acomodação de Solteiro Simples`)
        console.log(`| 6 - Designar acomodação de Solteiro Mais`)
        console.log(`****************************`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}