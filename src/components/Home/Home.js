import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData();


    return (
        <div>
            <p className='text-5xl text-center font-bold my-10 text-gray-700'>Explore Thousands of Designs on Threadless</p>
            <div className='grid grid-cols-6 gap-4 w-11/12 mx-auto'>
                <div className='grid grid-cols-3 gap-10 col-span-5 w-11/12 mx-auto mb-10'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='grid col-span-1'>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;