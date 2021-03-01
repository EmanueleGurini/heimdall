import React from 'react'
import "./Products.css";
import Product from "../Components/Product"
import requests from "../requests"

function Products({ title }) {
    return (
        <div className="products">
           <h1 className="products__title">{ title }</h1>
           <Product fetchUrl={ requests.fetchProducts } />
        </div>
    )
}

export default Products
