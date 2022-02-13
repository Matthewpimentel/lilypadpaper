import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductInfo from "./components/ProductInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Preorder from "./components/Preorder";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/shop"}>
            <Shop />
          </Route>
          <Route path={"/about"}></Route>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/productinfo"}>
            <ProductInfo />
          </Route>
          <Route path={"/preorder"}>
            <Preorder />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
