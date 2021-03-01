import React, { useState, useEffect } from 'react'
import "./Product.css"
import axios from '../axios.js'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function Product({ fetchUrl }) {
    const [products, setProducts] = useState([]);
    const [magazzino, setMagazzino] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setProducts(request.data.data.request.products);
            return request;
        }
        fetchData();
    }, [])

    return (
        <ul>
            {
                products.map(product => 
                <li key={ product.id }>
                    <section className="product">

                        <div className="product__firstImpactInfo">
                            <div className="product__img">
                               <img src={ product.image.src } alt={product.title} /> 
                            </div>
                            <p><strong>{ product.variants[0].price } €</strong></p>
                        </div> {/* END product__firstImpactInfo */}

                        <div className="product__productInfo">
                            <h2>{ product.title }</h2>
                            <p>Sku: { product.variants[0].sku }</p>
                            <p><strong>Magazzino: { product.variants[0].inventory_quantity }</strong></p>
                        </div> {/*END product__productInfo */}

                        <div className="product__counter">
                            <button className="product__counterButton" onClick={() => {
                                setCounter(counter - 14)
                            }}>
                                <RemoveCircleIcon className="product__removeCircle" fontSize="large"/>
                            </button>
                            <div className="product__count">
                                <p><strong>{ counter }</strong></p>
                                <p>{ product.variants[0].inventory_quantity - counter }</p>
                            </div>
                            <button className="product__counterButton" onClick={() => {setCounter(counter + 14)}}>
                                <AddCircleIcon className="product__addCircle" fontSize="large"/>
                            </button>
                        </div> {/* END product__count */}
                    </section>
                </li>)
            }
        </ul>
    )
}

export default Product
