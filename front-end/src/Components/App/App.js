import'./App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Products from "../Products/Products";
import React from "react";
import Header from "../Header/Header"

function App() {

  return (
    <div className="App">
        <Router>
            <Header />

            <Switch>
              <Route path="/box">
                <Products title="NetflixBox" />
              </Route>

              <Route path="/dolce">
                <Products title="Dolce" />
              </Route>

              <Route path="/salato">
                <Products title="Salato" />
              </Route>

              <Route path="/magazzino">
                <Products title="Magazzino" />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
