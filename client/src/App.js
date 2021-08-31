import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <ToastContainer style={{ top: "70px" }} />
      <div className="container-fluid">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Product />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/orders">
              <Order />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div className="footer bg-dark mt-3 text-white p-3">
        <Footer />
      </div>
    </>
  );
}

export default App;
