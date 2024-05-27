import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import form from "../styles/form.module.css"
import Cliente from "../models/cliente";
import Documento from "../models/documento";
import { TipoDocumento } from "../enums/tipoDocumento";

export default function CadastrarClientePage() {
    const listaTitulares: Cliente[] = [
        new Cliente("pedro augusto", "", new Date()),
        new Cliente("gustavo gabriel", "", new Date()),
        new Cliente("yzabella luiza", "", new Date())
    ]

    const [nome, setNome] = useState<string>("")
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [nomeSocial, setNomeSocial] = useState<string>("")

    const [documentos, setDocumentos] = useState<Documento[]>([])
    const [errorDocumentos, setErrorDocumentos] = useState<boolean>(false)
    const [tipoDocumento, setTipoDocumento] = useState<string>("")
    const [nullTipoDocumento, setNullTipoDocumento] = useState<boolean>(true)
    const [numeroDocumentoCPF, setNumeroDocumentoCPF] = React.useState<string>("")
    const [numeroDocumentoRG, setNumeroDocumentoRG] = React.useState<string>("")
    const [numeroDocumentoPassaporte, setNumeroDocumentoPassaporte] = React.useState<string>("")
    const [errorNumeroDocumento, setErrorNumeroDocumento] = React.useState<boolean>(false)
    const [dataExpedicaoDocumento, setDataExpedicaoDocumento] = React.useState<string>("")
    const [errorDataExpedicao, setErrorDataExpedicao] = React.useState<boolean>(false)

    const [tipoCliente, setTipoCliente] = useState<string>("")
    const [nullTipoCliente, setNullTipoCliente] = useState<boolean>(true)

    const [titular, setTitular] = useState<string>("")
    const [nullTitular, setNullTitular] = useState<boolean>(true)

    /* Utils */

    function limparCampos() {
        limparCamposDocumentos()
    }

    function limparCamposDocumentos() {
        setTipoDocumento("")
        setNullTipoDocumento(true)
        setNumeroDocumentoCPF("")
        setNumeroDocumentoRG("")
        setNumeroDocumentoPassaporte("")
        setDataExpedicaoDocumento("")
    }

    function limparErros() {
        setErrorNome(false)
        setErrorDocumentos(false)
        setErrorNumeroDocumento(false)
        setErrorDataExpedicao(false)
    }

    function verificarCamposRequired(): boolean {
        if (nome === "") {
            setErrorNome(true)
            return false
        }

        return true
    }

    /* Handlechange */

    const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setNome(e.target.value)
    }

    const handleTipoDocumento = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        limparCamposDocumentos()
        if (e.target.value === "") {
            setNullTipoDocumento(true)
        } else {
            setNullTipoDocumento(false)
        }
        setTipoDocumento(e.target.value)
    }

    const handleNumeroDocumentoCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3/$4")
        if (numero.length > 14) return
        setNumeroDocumentoCPF(numero)
    }

    const handleNumeroDocumentoRG = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
        if (numero.length > 12) return
        setNumeroDocumentoRG(numero)
    }

    const handleNumeroDocumentoPassaporte = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        if (numero.length > 9) return
        setNumeroDocumentoPassaporte(numero)
    }

    const handleDataExpericaoDocumento = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setDataExpedicaoDocumento(e.target.value)
    }

    const handleTipoCliente = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        if (e.target.value === "") {
            setNullTipoCliente(true)
        } else {
            setNullTipoCliente(false)
        }
        setTipoCliente(e.target.value)
    }

    const handleTitular = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        if (e.target.value === "") {
            setNullTitular(true)
        } else {
            setNullTitular(false)
        }
        setTitular(e.target.value)
    }

    /* funcoes finais */

    function adicionarDocumento() {
        limparErros()
        if (tipoDocumento === "") {
            setErrorDocumentos(true)
            return
        }

        if (tipoDocumento === "cpf") {
            if (numeroDocumentoCPF === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoCPF, TipoDocumento.CPF, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        if (tipoDocumento === "rg") {
            if (numeroDocumentoRG === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoRG, TipoDocumento.RG, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        if (tipoDocumento === "passaporte") {
            if (numeroDocumentoPassaporte === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoPassaporte, TipoDocumento.Passaporte, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        limparCamposDocumentos()
    }

    function removerDocumento(documento: Documento) {
        let index = documentos.indexOf(documento)
        let documentosAtualizados = documentos
        documentosAtualizados.splice(index, 1)
        setDocumentos([...documentosAtualizados])
    }

    function cadastrar() {
        console.log("cadastrando novo cliente")
        console.log(nome)
    }

    return (
        <>
            <Navbar />
            <main>
                <div className={form.formulario}>
                    <div className={form.titulo}>
                        <h2>Cadastro de Clientes</h2>
                    </div>

                    <div className={form.campos}>
                        <div className={form.campo}> {/* Nome */}
                            <label className="text title required">Nome:</label>
                            <input
                                className="text"
                                type="text"
                                placeholder="Nome do Cliente"
                                value={nome}
                                onChange={handleNome}
                            />
                        </div>

                        <div className={form.campo}> {/* Nome Social */}
                            <label className="text title">Nome Social:</label>
                            <input
                                className="text"
                                type="text"
                                placeholder="Nome do Cliente"
                            />
                        </div>

                        <div className={form.campo}> {/* Data de nascimento */}
                            <label className="text title required">Data de Nascimento:</label>
                            <input
                                className="text"
                                type="date"
                                placeholder="Nome do Cliente"
                            />
                        </div>

                        <div className={form.campo}> {/* Documentos */}
                            <label className="text title required">Documentos</label>
                            <select
                                className={nullTipoDocumento ? form.selectVazio + " text" : "text"}
                                value={tipoDocumento}
                                onChange={handleTipoDocumento}
                            >
                                <option value="">- Nenhum documento selecionado</option>
                                <option value="cpf">CPF</option>
                                <option value="rg">RG</option>
                                <option value="passaporte">Passaporte</option>
                            </select>

                            {
                                tipoDocumento === "cpf" && (
                                    <>
                                        <input
                                            className={errorNumeroDocumento ? form.errorInput + " text" : "text"}
                                            type="text"
                                            placeholder="000.000.000-00"
                                            onChange={handleNumeroDocumentoCPF}
                                            value={numeroDocumentoCPF}
                                        />
                                        <input
                                            className={errorDataExpedicao ? form.errorInput + " text" : "text"}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            {
                                tipoDocumento === "rg" && (
                                    <>
                                        <input
                                            className={errorNumeroDocumento ? form.errorInput + " text" : "text"}
                                            type="text"
                                            placeholder="00.000.000-0"
                                            onChange={handleNumeroDocumentoRG}
                                            value={numeroDocumentoRG}
                                        />
                                        <input
                                            className={errorDataExpedicao ? form.errorInput + " text" : "text"}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            {
                                tipoDocumento === "passaporte" && (
                                    <>
                                        <input
                                            className={errorNumeroDocumento ? form.errorInput + " text" : "text"}
                                            type="text"
                                            placeholder="000000000"
                                            onChange={handleNumeroDocumentoPassaporte}
                                            value={numeroDocumentoPassaporte}
                                        />
                                        <input
                                            className={errorDataExpedicao ? form.errorInput + " text" : "text"}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            <div className={form.visualizar}>
                                {
                                    documentos.map((documento, index) => {
                                        return (
                                            <div className={form.documento}>
                                                <div className={form.textos} key={index}>
                                                    <div className="text">{documento.Tipo}</div>
                                                    <div className="text">{documento.Numero}</div>
                                                    <div className="text">{documento.DataExpedicao.toLocaleDateString()}</div>
                                                </div>
                                                <button className={form.removeButton} onClick={() => removerDocumento(documento)}>-</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={form.campo}> {/* Tipo do cliente */}
                            <label className="text title required">Tipo de Cliente</label>
                            <select
                                className={nullTipoCliente ? form.selectVazio + " text" : "text"}
                                value={tipoCliente}
                                onChange={handleTipoCliente}
                            >
                                <option value="">- Nenhum tipo escolhido -</option>
                                <option value="dependente">Dependente</option>
                                <option value="titular">Títular</option>
                            </select>
                        </div>

                        {
                            tipoCliente === "titular" && (
                                <></>
                            )
                        }

                        {
                            tipoCliente === "dependente" && (
                                <div className={form.campo}>
                                    <label className="text title required">Titular</label>
                                    <select
                                        className={nullTitular ? form.selectVazio + " text" : "text"}
                                        value={titular}
                                        onChange={handleTitular}
                                    >
                                        <option value="">- Nenhum titular escolhido</option>
                                        {
                                            listaTitulares.map((titular, index) => {
                                                return <option value={titular.Nome} key={index}>{titular.Nome}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        }

                    </div>

                    <div className={form.botoes}>
                        <button
                            className={form.limpar + " text"}
                            onClick={limparCampos}
                        >Limpar</button>
                        <button
                            className={form.cadastrar + " text"}
                            onClick={cadastrar}
                        >Enviar</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}