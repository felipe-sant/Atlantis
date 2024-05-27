import { ClienteDependenteProps } from "../types/clienteDependenteProps";
import css from "../styles/clienteDependente.component.module.css"
import react from "react";
import { Modal } from "react-bootstrap";
import { transformarData } from "../utils/transformarData";
import Documento from "../models/documento";
import Cliente from "../models/cliente";
import { TipoDocumento } from "../enums/tipoDocumento";

export default function ClienteDependente(props: ClienteDependenteProps) {
    const tipoDocumentos = ["CPF", "RG", "Passaporte"]
    const listaTodosTitulares = [props.cliente, props.cliente, props.cliente]
    const [show, setShow] = react.useState(false)
    let nome: string = props.cliente.Nome
    let nomeSocial: string = props.cliente.NomeSocial
    const [dataNascimento, setDataNascimento] = react.useState(transformarData(props.cliente.DataNascimento))
    const [errorDataNascimento, setErrorDataNascimento] = react.useState<boolean>(false)
    const [documentos, setDocumentos] = react.useState<Documento[]>(props.cliente.Documentos)
    const [errorDocumentos, setErrorDocumentos] = react.useState<boolean>(false)
    const [tipoDocumento, setTipoDocumento] = react.useState<string>("CPF")
    const [numeroDocumentoCPF, setNumeroDocumentoCPF] = react.useState<string>("")
    const [numeroDocumentoRG, setNumeroDocumentoRG] = react.useState<string>("")
    const [numeroDocumentoPassaporte, setNumeroDocumentoPassaporte] = react.useState<string>("")
    const [errorNumeroDocumento, setErrorNumeroDocumento] = react.useState<boolean>(false)
    const [dataExpedicao, setDataExpedicao] = react.useState<string>("")
    const [errorDataExpedicao, setErrorDataExpedicao] = react.useState<boolean>(false)
    const [nomeTitular, setNomeTitular] = react.useState<string>("")
    const [errorNomeTitular, setErrorNomeTitular] = react.useState<boolean>(false)
    const [titular, setTitular] = react.useState<Cliente>(props.cliente.Titular)
    const modalShow = () => setShow(true)
    const modalClose = () => setShow(false)

    function limparErros() {
        setErrorDataNascimento(false)
        setErrorDocumentos(false)
        setErrorNumeroDocumento(false)
        setErrorDataExpedicao(false)
        setErrorNomeTitular(false)
    }

    let verificar_campos = () => {
        if (dataNascimento === "") {
            setErrorDataNascimento(true)
            return false
        }

        if (documentos.length === 0) {
            setErrorDocumentos(true)
            return false
        }

        if (documentos.length > 0) {
            let cpf = false
            let rg = false
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

        if (titular === null || titular === undefined) {
            setErrorNomeTitular(true)
            return false
        }

        return true
    }

    function handleDataNascimento(e: react.ChangeEvent<HTMLInputElement>) {
        limparErros()
        setDataNascimento(e.target.value)
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

    function handleTitular(e: react.ChangeEvent<HTMLSelectElement>) {
        limparErros()
        setNomeTitular(e.target.value)
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

    let salvarAtualiacao = () => {
        limparErros()
        if (!verificar_campos()) {
            console.log("Erro ao atualizar cliente!")
            return
        }

        console.clear()
        console.log("Nome: " + nome)
        console.log("Data de Nascimento: " + dataNascimento)
        console.log("Documentos: " + documentos)
        console.log("Titular: " + titular)
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
                        <span className="text">Dependente</span>
                    </div>
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
                        <div className="text">Dependente</div>
                    </Modal.Header>
                    <Modal.Body className="modal_body">

                        <div className="informacao">
                            <label className="text title required">Data de Nascimento:</label>
                            <input
                                type="text"
                                value={dataNascimento}
                                onChange={handleDataNascimento}
                                className={errorDataNascimento ? "error dataNascimento" : "dataNascimento"}
                            />
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

                        <div className="informacao">
                            <label className="text title required">Titular</label>
                            <select
                                onChange={handleTitular}
                                className={errorNomeTitular ? "error" : ""}
                            >
                                {
                                    listaTodosTitulares.map((titular, index) => {
                                        return (
                                            <option value={titular.Nome} key={index}>{titular.Nome}</option>
                                        )
                                    })
                                }
                            </select>
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