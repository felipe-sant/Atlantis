import Menu from "../interfaces/menu";

export default class MenuCadastrarDeletar implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que você deseja fazer?`)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar`)
        console.log(`| 2 - Deletar`)
        console.log(`----------------------`)
    }
}