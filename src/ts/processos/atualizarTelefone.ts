import Processo from "../abstracoes/processo";
import MenuCadastrarDeletar from "../menus/menuCadastrarDeletar";
import Cliente from "../modelos/cliente";
import CadastroTelefone from "./cadastroTelefone";
import DeletarTelefone from "./deletarTelefone";

export default class AtualizarTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente:Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuCadastrarDeletar()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        if (this.opcao == 1) {
            let cadastroTelefone = new CadastroTelefone(this.cliente)
            cadastroTelefone.processar()
        } else if (this.opcao == 2) {
            let deletarTelefone = new DeletarTelefone(this.cliente)
            deletarTelefone.atualizar()
        } else {
            console.log("Opção inválida")
        }
    }
}