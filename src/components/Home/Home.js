import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const exists = cart.find(produc => produc._id === product._id);
        if (exists) {
            alert("This product is already added to the Cart!")
        }
        else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = (product) => {
        const remainingProducts = cart.filter(produc => produc._id !== product._id);
        setCart(remainingProducts)
    }


    return (
        <div>
            <p className='text-5xl text-center font-bold my-10 text-gray-700'>Explore Thousands of Designs on Threadless</p>
            <div className='grid grid-cols-6 gap-4 w-11/12 mx-auto'>
                <div className='grid grid-cols-3 gap-10 col-span-5 w-11/12 mx-auto mb-10'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='grid col-span-1'>
                    <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;