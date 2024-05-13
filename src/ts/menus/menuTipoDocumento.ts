import Menu from "../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo do documento? `)
        console.log(`----------------------`)
        console.log(`| 1 - CPF (1 por pessoa)`)
        console.log(`| 2 - Registro Geral`)
        console.log(`| 3 - Passaporte (1 por pessoa)`)
        console.log(`| 0 - Finalizar aba de documentos`)
        console.log(`----------------------`)
    }
}