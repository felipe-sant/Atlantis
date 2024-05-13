import Cliente from "../modelos/cliente";

export default function isDependente(cliente: Cliente) {
    let verificador = false
    if (cliente.Titular != undefined) {
        verificador = true
    }
    return verificador
}