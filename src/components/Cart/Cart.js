import React from 'react';
import Product from '../Product/Product';

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div className=' bg-teal-800 rounded-3xl sticky top-40 text-white h-96'>
            <p className='text-2xl font-bold text-center mt-8'>Cart Summary</p>
            {
                cart.length === 0 ? <p className='mb-8 text-center text-xl font-semibold px-3'>No Products in the Cart</p> : <p className='mb-8 text-center text-xl font-semibold'>Total Products: {cart.length}</p>
            }
            <div className='text-lg pl-8'>
                {
                    cart.map(Product => <div key={Product._id}>

                        <div>
                            {Product.name}
                            <button onClick={() => handleRemoveFromCart(Product)}><p className='ml-4 text-red-900'>X</p></button>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Cart;