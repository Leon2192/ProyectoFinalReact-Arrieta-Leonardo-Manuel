import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Logo from "../components/Logo/Logo";
  import NavBar from "../components/CartWidget/CartWidget";
  import Home from "../Pages/Home";
  import ItemCategoriasContainer from "../components/ItemCategorias/ItemCategoriasContainer";
  import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
  import CartView from "../components/Cart/CartView";
import CheckOut from "../Pages/CashOut";


export const Routes = () => {
    return (
     <Router>
      <header>
        <Link to="/">
               <Logo/>
               <NavBar/>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemCategoriasContainer />
          </Route>
          <Route  exact path="/item/:itemId">
             <ItemDetailContainer />
          </Route>
          <Route exact path="/cartview">
            <CartView />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </main>
    </Router>
    )
}


