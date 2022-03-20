import React from 'react';

const Product = (props) => {
    const { id, title, image, price } = props.product;
    return (
       <div className='col-md-4'>
            <div className='card' style={{width:'18rem'}}>
            <img src={image} alt="" className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>Price: {price}</p>
                    <a href="product" className='btn btn-primary'>Buy Now</a>
                    <button className='btn btn-outline-danger'>Add to Cart</button>
                </div>
        </div>
       </div>
    );
};

export default Product;