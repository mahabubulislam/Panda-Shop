import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    products.map(product => <Product setCount={props} product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;