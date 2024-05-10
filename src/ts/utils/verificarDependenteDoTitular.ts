import Cliente from "../modelos/cliente";
import verificarDependente from "./verificarDependente";

export default function verificarDependenteDoTitular(clienteDependente: Cliente, clienteTitular: Cliente | undefined): boolean {
    let verificacao = false
    if (verificarDependente(clienteDependente) && clienteDependente.Titular.Nome == clienteTitular?.Nome) {
        verificacao = true
    }
    return verificacao
}