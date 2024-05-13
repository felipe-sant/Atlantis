import Cliente from "../modelos/cliente";

export default function verificarDependenteDoTitular(dependente:Cliente, titular:Cliente | undefined) {
    let verificador = false
    if (titular != undefined) {
        if (dependente.Titular == titular) {
            verificador = true
        }
    }
    return verificador
}