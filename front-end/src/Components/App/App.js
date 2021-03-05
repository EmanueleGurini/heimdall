import'./App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Products from "../Products/Products";
import React from "react";

function App() {

  return (
    <div className="App">
        <Router>
          <ul className="header">
            <li className="header__items"><Link to="/box">Box</Link></li>
            <li className="header__items"><Link to="/dolce">Dolce</Link></li>
            <li className="header__items"><Link to="/salato">Salato</Link></li>
            <li className="header__items"><Link to="/magazzino">Magazzino</Link></li>
          </ul>
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
