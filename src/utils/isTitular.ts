import Cliente from "../models/cliente"

export default function isTitular(cliente: Cliente) {
    let verificador = false
    if (cliente.Titular == undefined) {
        verificador = true
    }
    return verificador
}