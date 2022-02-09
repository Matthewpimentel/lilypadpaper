import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductInfo from "./components/ProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="shop" element={<Shop />} />
            <Route path="productInfo" element={<ProductInfo id={Shop.id} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
