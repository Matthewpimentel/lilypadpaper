import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ProductInfo from "./components/ProductInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Preorder from "./components/Preorder";
import Home from "./components/Home";
import BannerMessage from "./components/BannerMessage";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <BannerMessage />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/shop"}>
            <Shop />
          </Route>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/productinfo"}>
            <ProductInfo />
          </Route>
          <Route path={"/preorder"}>
            <Preorder />
          </Route>
          <Route path={"/success"}>
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
