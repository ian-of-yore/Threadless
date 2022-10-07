import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { price, picture, name, gender } = product;

    return (
        <div className='bg-white rounded-md border-2 border-gray-800 shadow-lg hover:shadow-xl hover:border-orange-700'>
            <div>
                <img className='h-96 w-full rounded-md' src={picture} alt="" />
            </div>
            <div className='text-start ml-10 my-4 p-1'>
                <p className='text-2xl font-semibold'>Name: {name}</p>
                <p className='text-lg font-medium'>Price: ${price}</p>
                <p>Gender: {gender}</p>
            </div>
            <button className='bg-orange-400 w-full h-10 text-lg font-medium hover:bg-orange-600 hover:text-white'>Add to Cart</button>
        </div>
    );
};

export default Product;