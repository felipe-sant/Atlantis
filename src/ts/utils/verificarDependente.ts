import Cliente from "../modelos/cliente"

export default function verificarDependente(cliente: Cliente): boolean {
    let verificacao = false
    if (cliente.Titular != undefined) {
        verificacao = true
    }
    return verificacao
}