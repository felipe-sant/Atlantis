import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/_notFound";
import TestePage from "./pages/teste";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clientes" element={<HomePage />} />
                <Route path="/dev/teste" element={<TestePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}