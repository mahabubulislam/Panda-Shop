import React from 'react';

const Product = (props) => {
    const { title, image, price } = props.product;
    console.log(props.setCount)
    const {setCount} = props.setCount
    return (
        <div className="col-md-4 g-3">
            <div className="card border-0 shadow-lg h-100 rounded-2">
                <img src={image} alt="" className="card-img-top w-75 mx-auto" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 20)}</h5>
                    <h4 className="card-text">Price: ${price}</h4>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning w-50">Buy now</button>
                    <button className="btn btn-success w-50" onClick={setCount} >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;