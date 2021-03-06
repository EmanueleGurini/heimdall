import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        //<section className="header">

            <ul className="header">
                <li className="header__items"><Link to="/box">Box</Link></li>
                <li className="header__items"><Link to="/dolce">Dolce</Link></li>
                <li className="header__items"><Link to="/salato">Salato</Link></li>
                <li className="header__items"><Link to="/magazzino">Magazzino</Link></li>
            </ul>

        //</section>
    )
}

export default Header