import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData();


    return (
        <div>
            <p className='text-5xl text-center font-bold my-10 text-gray-700'>Explore Thousands of Designs on Threadless</p>
            <div className='grid grid-cols-3 gap-10 w-9/12 mx-auto mb-10'>
                {
                    products.map(product => <Product
                        key={product.index}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Home;