import Menu from "../interfaces/menu";

export default class MenuAtualizarClienteDependente implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que você deseja atualizar no cliente dependente?`)
        console.log(`----------------------`)
        console.log(`| 1 - Atualizar nome`)
        console.log(`| 2 - Atualizar nome social`)
        console.log(`| 3 - Atualizar data de nascimento`)
        console.log(`| 4 - Atualizar os documentos`)
        console.log(`| 5 - Atualizar o titular`)
        console.log(`| 6 - Mostrar o cliente`)
        console.log(`****************************`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}