import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/pages/App.scss";
import Layout from "./Layout";
import Catalogue from "./Catalogue";
import Cart from "./Cart";

function App() {
    return (
        <div className="root">
        <Router>
            <div className="layout">
            <Layout>
                <Routes>
                    <Route path="/" element={<Catalogue />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Layout>
            </div>
        </Router>
        </div>
    );
}

export default App;
