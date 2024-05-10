import Cliente from "../modelos/cliente";

export default function verificarTitular(cliente: Cliente) {
    let verificacao = false
    if (cliente.Titular == undefined) {
        verificacao = true
    }
    return verificacao
}