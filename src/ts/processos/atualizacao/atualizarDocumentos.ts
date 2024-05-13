import Processo from "../../abstracoes/processo";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import Cliente from "../../modelos/cliente";
import AtualizarCPF from "./atualizarCPF";
import AtualizarPassaporte from "./atualizarPassaporte";
import AtualizarRG from "./atualizarRG";

export default class AtualizarDocumentos extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }
    processar(): void {
        console.log('Inciando a atualização de documentos...')
        
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    let cpf = new AtualizarCPF(this.cliente)
                    cpf.atualizar()
                    break
                case 2:
                    let rg = new AtualizarRG(this.cliente)
                    rg.processar()
                    break
                case 3:
                    let passaporte = new AtualizarPassaporte(this.cliente)
                    passaporte.atualizar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}