import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";


const BRoutes = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/admin" element={<Admin />} />
                
            </Routes>
        </BrowserRouter>

    );


    export default BRoutes;