import Cliente from "../modelos/cliente";

export default function verificarDependenteDoTitular(clienteDependente: Cliente, clienteTitular: Cliente | undefined): boolean {
    let verificacao = false
        if (clienteDependente.Titular != undefined && clienteDependente.Titular.Nome == clienteTitular?.Nome) {
            verificacao = true
        }
        return verificacao
}