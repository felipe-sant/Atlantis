import Menu from "../interfaces/menu";

export default class MenuAtualizarClienteTitular implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| O que você deseja atualizar no cliente titular?`)
        console.log(`----------------------`)
        console.log(`| 1 - Atualizar nome`)
        console.log(`| 2 - Atualizar nome social`)
        console.log(`| 3 - Atualizar data de nascimento`)
        console.log(`| 4 - Atualizar telefones`)
        console.log(`| 5 - Atualizar endereço`)
        console.log(`| 6 - Atualizar os documentos`)
        console.log(`| 7 - Atualizar os dependentes`)
        console.log(`| 8 - Mostrar o cliente`)
        console.log(`****************************`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}