import React from 'react';
import { useState } from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { price, picture, name, gender } = product;

    return (
        <div className='bg-white rounded-md border-2 border-gray-800 shadow-2xl'>
            <div>
                <img className='h-72 border-2 w-full rounded-md' src={picture} alt="" />
            </div>
            <div className='text-start ml-10 my-4 p-1'>
                <p className='text-2xl font-semibold'>Name: {name}</p>
                <p className='text-lg font-medium'>Price: ${price}</p>
                <p>Gender: {gender}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='bg-orange-400 w-full h-10 text-lg font-medium hover:bg-orange-600 hover:text-white'>Add to Cart</button>
        </div>
    );
};

export default Product;