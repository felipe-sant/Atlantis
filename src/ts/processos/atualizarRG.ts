import Processo from "../abstracoes/processo";
import MenuCadastrarDeletar from "../menus/menuCadastrarDeletar";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastroRg from "./cadastroRg";
import DeletarRg from "./deletarRg";

export default class AtualizarRG extends Processo {
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
            let cadastroRG = new CadastroRg(this.cliente)
            cadastroRG.processar()
        } else if (this.opcao == 2) {
            let deletarRg = new DeletarRg(this.cliente)
            deletarRg.atualizar()
        } else {
            console.log("Opção inválida")
        }
    }
}