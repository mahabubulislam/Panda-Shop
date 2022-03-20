import React, { useState } from 'react';

const Search = () => {
    const [product, setProduct] = useState([])
    return (
        <div>
            <h3 className='text-info my-3 text-center'>3 days guaranteed delivary all overs country </h3>
            <div className='container input-group mb-3 w-75'>
                <input type="text" className='form-control' />
                <button className='btn btn-outline-info'>Search</button>
            </div>
        </div>
    );
};

export default Search;