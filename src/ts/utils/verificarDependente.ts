import Cliente from "../modelos/cliente"

export default function verificarDependente(cliente: Cliente): boolean {
    let verificacao = false
    if (cliente.Dependentes == undefined || cliente.Dependentes.length == 0) {
        verificacao = true
    }
    return verificacao
}