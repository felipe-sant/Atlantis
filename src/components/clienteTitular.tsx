import react from "react"
import css from "../styles/clienteTitular.component.module.css"
import { ClienteTitularProps } from "../types/clienteTitularProps"
import { Modal } from "react-bootstrap"
import Telefone from "../models/telefone"
import Endereco from "../models/endereco"
import Documento from "../models/documento"
import Cliente from "../models/cliente"
import { transformarData } from "../utils/transformarData"
import { TipoDocumento } from "../enums/tipoDocumento"


export default function ClienteTitular(props: ClienteTitularProps) {
    const tipoDocumentos = ["CPF", "RG", "Passaporte"]
    const listaTodosDependentes = [props.cliente, props.cliente, props.cliente]
    const [show, setShow] = react.useState(false)
    let nome: string = props.cliente.Nome
    let nomeSocial: string = props.cliente.NomeSocial
    let dataCadastro: string = props.cliente.DataCadastro.toLocaleDateString()
    const [dataNascimento, setDataNascimento] = react.useState<string>(transformarData(props.cliente.DataNascimento))
    const [errorDataNascimento, setErrorDataNascimento] = react.useState<boolean>(false)
    const [ddd, setDdd] = react.useState<string>("")
    const [errorDdd, setErrorDdd] = react.useState<boolean>(false)
    const [numero, setNumero] = react.useState<string>("")
    const [errorNumero, setErrorNumero] = react.useState<boolean>(false)
    const [telefones, setTelefones] = react.useState<Telefone[]>(props.cliente.Telefones)
    const [errorTelefones, setErrorTelefones] = react.useState<boolean>(false)
    const [endereco, setEndereco] = react.useState<Endereco>(props.cliente.Endereco)
    const [rua, setRua] = react.useState<string>(endereco.Rua)
    const [errorRua, setErrorRua] = react.useState<boolean>(false)
    const [bairro, setBairro] = react.useState<string>(endereco.Bairro)
    const [errorBairro, setErrorBairro] = react.useState<boolean>(false)
    const [cidade, setCidade] = react.useState<string>(endereco.Cidade)
    const [errorCidade, setErrorCidade] = react.useState<boolean>(false)
    const [estado, setEstado] = react.useState<string>(endereco.Estado)
    const [errorEstado, setErrorEstado] = react.useState<boolean>(false)
    const [pais, setPais] = react.useState<string>(endereco.Pais)
    const [errorPais, setErrorPais] = react.useState<boolean>(false)
    const [codigoPostal, setCodigoPostal] = react.useState<string>(endereco.CodigoPostal)
    const [errorCodigoPostal, setErrorCodigoPostal] = react.useState<boolean>(false)
    const [documentos, setDocumentos] = react.useState<Documento[]>(props.cliente.Documentos)
    const [errorDocumentos, setErrorDocumentos] = react.useState<boolean>(false)
    const [tipoDocumento, setTipoDocumento] = react.useState<string>("CPF")
    const [numeroDocumentoCPF, setNumeroDocumentoCPF] = react.useState<string>("")
    const [numeroDocumentoRG, setNumeroDocumentoRG] = react.useState<string>("")
    const [numeroDocumentoPassaporte, setNumeroDocumentoPassaporte] = react.useState<string>("")
    const [errorNumeroDocumento, setErrorNumeroDocumento] = react.useState<boolean>(false)
    const [dataExpedicao, setDataExpedicao] = react.useState<string>("")
    const [errorDataExpedicao, setErrorDataExpedicao] = react.useState<boolean>(false)
    const [nomeDependente, setFiltroNome] = react.useState<string>("")
    const [errorNomeDependente, setErrorNomeDependente] = react.useState<boolean>(false)
    const [dependentes, setDependentes] = react.useState<Cliente[]>(props.cliente.Dependentes)
    const modalShow = () => setShow(true)
    const modalClose = () => setShow(false)

    function limparErros() {
        setErrorDataNascimento(false)
        setErrorDdd(false)
        setErrorNumero(false)
        setErrorTelefones(false)
        setErrorRua(false)
        setErrorBairro(false)
        setErrorCidade(false)
        setErrorEstado(false)
        setErrorPais(false)
        setErrorCodigoPostal(false)
        setErrorDocumentos(false)
        setErrorNumeroDocumento(false)
        setErrorDataExpedicao(false)
    }

    let verificar_campos = () => {
        if (dataNascimento === "") {
            setErrorDataNascimento(true)
            return false
        }

        if (telefones.length === 0) {
            setErrorTelefones(true)
            return false
        }

        if (codigoPostal === "") {
            setErrorCodigoPostal(true)
            return false
        }

        if (pais === "") {
            setErrorPais(true)
            return false
        }

        if (estado === "") {
            setErrorEstado(true)
            return false
        }

        if (cidade === "") {
            setErrorCidade(true)
            return false
        }

        if (bairro === "") {
            setErrorBairro(true)
            return false
        }

        if (rua === "") {
            setErrorRua(true)
            return false
        }

        if (documentos.length === 0) {
            setErrorDocumentos(true)
            return false
        }

        if (documentos.length > 0) {
            let cpf = false
            let rg = false
            let passaporte = false
            for (let i = 0; i < documentos.length; i++) {
                if (documentos[i].Tipo === TipoDocumento.CPF) {
                    cpf = true
                }
                if (documentos[i].Tipo === TipoDocumento.RG) {
                    rg = true
                }
            }
            if (!cpf || !rg) {
                setErrorDocumentos(true)
                return false
            }
        }

        return true
    }

    function handleDataNascimento(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setDataNascimento(e.target.value)
    }

    function handleDdd(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        let ddd = e.target.value
        ddd = ddd.replace(/\D/g, "")
        if (ddd.length > 2) return
        setDdd(ddd)
    }

    function handleNumero(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d)(\d{4})$/, "$1-$2")
        if (numero.length > 10) return
        setNumero(numero)
    }

    function handleCodigoPostal(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        let codigoPostal = e.target.value
        codigoPostal = codigoPostal.replace(/\D/g, "")
        codigoPostal = codigoPostal.replace(/(\d{5})(\d{3})$/, "$1-$2")
        if (codigoPostal.length > 9) return
        setCodigoPostal(codigoPostal)
    }

    function handlePais(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setPais(e.target.value)
    }

    function handleEstado(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setEstado(e.target.value)
    }

    function handleCidade(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setCidade(e.target.value)
    }

    function handleBairro(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setBairro(e.target.value)
    }

    function handleRua(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setRua(e.target.value)
    }

    function handleTipoDocumento(e: react.ChangeEvent<HTMLSelectElement>) {
        limparErros()
        setTipoDocumento(e.target.value)
    }

    function handleNumeroDocumentoCPF(e: react.ChangeEvent<HTMLInputElement>) {
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3/$4")
        if (numero.length > 14) return
        limparErros()
        setNumeroDocumentoCPF(numero)
    }

    function handleNumeroDocumentoRG(e: react.ChangeEvent<HTMLInputElement>) {
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
        if (numero.length > 12) return
        limparErros()
        setNumeroDocumentoRG(numero)
    }

    function handleNumeroDocumentoPassaporte(e: react.ChangeEvent<HTMLInputElement>) {
        let numero = e.target.value
        if (numero.length > 9) return
        limparErros()
        setNumeroDocumentoPassaporte(numero)
    }

    function handleDataExpedicao(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setDataExpedicao(e.target.value)
    }

    function handleDependente(e: react.ChangeEvent<HTMLSelectElement>) {
        limparErros()
        setFiltroNome(e.target.value)
    }

    function adicionarTelefone() {
        limparErros()
        if (ddd === "") {
            setErrorDdd(true)
            return
        }
        if (numero === "" || numero.length < 9) {
            setErrorNumero(true)
            return
        }
        let telefone = new Telefone(ddd, numero)
        setTelefones([...telefones, telefone])
        setDdd("")
        setNumero("")
    }

    function removerTelefone(telefone: Telefone) {
        let index = telefones.indexOf(telefone)
        let telefonesAtualizados = telefones
        telefonesAtualizados.splice(index, 1)
        setTelefones([...telefonesAtualizados])
    }

    function adicionarDocumento() {
        limparErros()
        if (tipoDocumento === "") {
            setErrorDocumentos(true)
            return
        }
        if (tipoDocumento === "CPF") {
            if (numeroDocumentoCPF === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicao === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoCPF, TipoDocumento.CPF, new Date(dataExpedicao))
            setDocumentos([...documentos, novoDocumento])
        }
        if (tipoDocumento === "RG") {
            if (numeroDocumentoRG === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicao === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoRG, TipoDocumento.RG, new Date(dataExpedicao))
            setDocumentos([...documentos, novoDocumento])
        }
        if (tipoDocumento === "Passaporte") {
            if (numeroDocumentoPassaporte === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicao === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoPassaporte, TipoDocumento.Passaporte, new Date(dataExpedicao))
            setDocumentos([...documentos, novoDocumento])
        }

        setNumeroDocumentoCPF("")
        setNumeroDocumentoRG("")
        setNumeroDocumentoPassaporte("")
        setDataExpedicao("")
    }

    function removerDocumento(documento: Documento) {
        let index = documentos.indexOf(documento)
        let documentosAtualizados = documentos
        documentosAtualizados.splice(index, 1)
        setDocumentos([...documentosAtualizados])
    }

    function adicionarDependente() {
        limparErros()
        if (nomeDependente === "") {
            setErrorNomeDependente(true)
            return
        }
        let clienteDependente = new Cliente(nomeDependente, "", new Date())
        setDependentes([...dependentes, clienteDependente])
    }

    function removerDependente(cliente: Cliente) {
        let index = dependentes.indexOf(cliente)
        let dependentesAtualizados = dependentes
        dependentesAtualizados.splice(index, 1)
        setDependentes([...dependentesAtualizados])
    }

    let salvarAtualiacao = () => {
        limparErros()
        if (!verificar_campos()) {
            console.log("Erro ao atualizar cliente!")
            return
        }

        console.clear()
        console.log("Nome: " + nome)
        console.log("Data de Nascimento: " + dataNascimento)
        console.log("Telefones: " + telefones)
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        console.log("Endereco: " + endereco)
        console.log("   Código Postal: " + codigoPostal)
        console.log("   Pais: " + pais)
        console.log("   Estado: " + estado)
        console.log("   Cidade: " + cidade)
        console.log("   Bairro: " + bairro)
        console.log("   Rua: " + rua)
        console.log("\nCliente atualizado com sucesso!\n")
    }

    let excluirCliente = () => {
        alert("Cliente excluído com sucesso!")
    }

    return (
        <>
            <div className={css.item} onClick={modalShow}>
                <div className={css.header}>
                    <div className={css.titulos}>
                        <h2>{nome}</h2>
                        <h3>{nomeSocial}</h3>
                    </div>
                    <div className={css.dataCadastro}>
                        <span className="text">{dataCadastro}</span>
                    </div>
                </div>
                <div className={css.dependentes}>

                </div>
            </div>
            <Modal
                show={show}
                onHide={modalClose}
                className="modal"
            >
                <div>
                    <Modal.Header className={"modal_header " + css.titulos}>
                        <h2>{nome}</h2>
                        <div className="text">Titular</div>
                    </Modal.Header>
                    <Modal.Body className="modal_body">

                        <div className="informacao"> {/* Data de Nascimento */}
                            <label className="text title required">Data de Nascimento:</label>
                            <input
                                type="date"
                                value={dataNascimento}
                                onChange={handleDataNascimento}
                                className={errorDataNascimento ? "error dataNascimento" : "dataNascimento"}
                            />
                        </div>

                        <div className="informacao"> {/* Telefone */}
                            <label className="text title required">Telefones</label>
                            <div className="adicionarTelefone">
                                <input
                                    type="text"
                                    placeholder="00"
                                    className={errorDdd ? "error ddd" : "ddd"}
                                    value={ddd}
                                    onChange={handleDdd}
                                />
                                <input
                                    type="text"
                                    placeholder="00000-0000"
                                    className={errorNumero ? "error numero" : "numero"}
                                    value={numero}
                                    onChange={handleNumero}
                                />
                                <button className="addButton" onClick={adicionarTelefone}>+</button>
                            </div>
                            <div className={errorTelefones ? "error listaTelefones lista" : "listaTelefones lista"}>
                                {telefones.map((telefone, index) => {
                                    return (
                                        <div className="telefone" key={index}>
                                            <span className="text">({telefone.Ddd}) {telefone.Numero}</span>
                                            <button className="removeButton" onClick={() => removerTelefone(telefone)}>-</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="informacao"> {/* Endereço */}
                            <label className="text title required">Endereço</label>
                            <div className="endereco">
                                <div className="codigoPostal">
                                    <label className="text">Código Postal:</label>
                                    <input
                                        type="text"
                                        value={codigoPostal}
                                        onChange={handleCodigoPostal}
                                        className={errorCodigoPostal ? "error" : ""}
                                    />
                                </div>
                                <div className="pais">
                                    <label className="text">País:</label>
                                    <input
                                        type="text"
                                        value={pais}
                                        onChange={handlePais}
                                        className={errorPais ? "error" : ""}
                                    />
                                </div>
                                <div className="estado">
                                    <label className="text">Estado:</label>
                                    <input
                                        type="text"
                                        value={estado}
                                        onChange={handleEstado}
                                        className={errorEstado ? "error" : ""}
                                    />
                                </div>
                                <div className="cidade">
                                    <label className="text">Cidade:</label>
                                    <input
                                        type="text"
                                        value={cidade}
                                        onChange={handleCidade}
                                        className={errorCidade ? "error" : ""}
                                    />
                                </div>
                                <div className="bairro">
                                    <label className="text">Bairro:</label>
                                    <input
                                        type="text"
                                        value={bairro}
                                        onChange={handleBairro}
                                        className={errorBairro ? "error" : ""}
                                    />
                                </div>
                                <div className="rua">
                                    <label className="text">Rua:</label>
                                    <input
                                        type="text"
                                        value={rua}
                                        onChange={handleRua}
                                        className={errorRua ? "error" : ""}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="informacao"> {/* Documentos */}
                            <label className="text title required">Documentos</label>
                            <div className="adicionarDocumento">
                                <select
                                    className="tipoDocumento"
                                    onChange={handleTipoDocumento}
                                >
                                    {tipoDocumentos.map((tipoDocumento, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={tipoDocumento}
                                            >{tipoDocumento}</option>
                                        )
                                    })}
                                </select>
                                {tipoDocumento === "CPF" ?
                                    <input
                                        type="text"
                                        className={errorNumeroDocumento ? "error numeroDocumento text" : "numeroDocumento text"}
                                        placeholder="000.000.000/00"
                                        value={numeroDocumentoCPF}
                                        onChange={handleNumeroDocumentoCPF}
                                    />
                                    : null}
                                {tipoDocumento === "RG" ?
                                    <input
                                        type="text"
                                        className={errorNumeroDocumento ? "error numeroDocumento text" : "numeroDocumento text"}
                                        placeholder="00.000.000-0"
                                        value={numeroDocumentoRG}
                                        onChange={handleNumeroDocumentoRG}
                                    />
                                    : null}
                                {tipoDocumento === "Passaporte" ?
                                    <input
                                        type="text"
                                        className={errorNumeroDocumento ? "error numeroDocumento text" : "numeroDocumento text"}
                                        placeholder="000000000"
                                        value={numeroDocumentoPassaporte}
                                        onChange={handleNumeroDocumentoPassaporte}
                                    />
                                    : null}
                                <input
                                    type="date"
                                    className={errorDataExpedicao ? "error dataExpedicao text" : "dataExpedicao text"}
                                    value={dataExpedicao}
                                    onChange={handleDataExpedicao}
                                />
                                <button className="addButton" onClick={adicionarDocumento}>+</button>
                            </div>
                            <div className={errorDocumentos ? "error listaDocumentos lista" : "listaDocumentos lista"}>
                                {documentos.map((documento, index) => {
                                    return (
                                        <div className="documento" key={index}>
                                            <div className="textos">
                                                <div className="text">{documento.Tipo}</div>
                                                <div className="text">{documento.Numero}</div>
                                                <div className="text">{documento.DataExpedicao.toLocaleDateString()}</div>
                                            </div>
                                            <button className="removeButton" onClick={() => removerDocumento(documento)}>-</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="informacao"> {/* Dependentes */}
                            <label className="text title">Dependentes</label>
                            <div className="adicionarDependente">
                                <select
                                    onChange={handleDependente}
                                    className={errorNomeDependente ? "error" : ""}
                                >
                                    <option></option>
                                    {
                                        listaTodosDependentes.map((dependente, index) => {
                                            return (
                                                <option value={dependente.Nome} key={index}>{dependente.Nome}</option>
                                            )
                                        })
                                    }
                                </select>
                                <button className="addButton" onClick={adicionarDependente}>+</button>
                            </div>
                            <div className="listaDependentes lista">
                                {dependentes.map((dependente, index) => {
                                    return (
                                        <div className="dependente" key={index}>
                                            <span className="text">{dependente.Nome}</span>
                                            <button className="removeButton" onClick={() => removerDependente(dependente)}>-</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer className="modal_footer">
                        <button className="salvar" onClick={salvarAtualiacao}>Salvar</button>
                        <button className="excluir" onClick={excluirCliente}>Excluir</button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}