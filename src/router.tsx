import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/_notFound";
import TestePage from "./pages/teste";
import ClientesPage from "./pages/clientes";
import CadastrarClientePage from "./pages/cadastrarCliente";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/clientes/cadastrar" element={<CadastrarClientePage />} />
                <Route path="/dev" element={<TestePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}