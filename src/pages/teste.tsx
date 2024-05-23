import ClienteTitular from "../components/clienteTitular"
import Cliente from "../models/cliente"


export default function TestePage() {
    let cliente:Cliente = new Cliente("Fulano", "Fulano da Silva", new Date())
    return (
        <>
            <ClienteTitular cliente={cliente} />
        </>
    )
}