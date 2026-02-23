import React, { useState } from 'react'
import { cloudinaryImageIdURL, NONVEG_SYMBOL, VEG_SYMBOL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import CartButton from './CartButton';
import EmptyCart from './EmptyCard';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return cartItems.length != 0 ? (
        <div className="w-2/4 mx-auto m-5 bg-neutral-100 p-4 rounded-lg shadow-md">
            <div className='flex justify-end mb-3'>
                <button
                    className='bg-red-500 hover:bg-red-700 text-white px-8 py-2 rounded-xl font-semibold transition duration-200'
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
            {cartItems.map((cartItem) => {
                const { id, isVeg, name, finalPrice, price, defaultPrice, imageId } =
                    cartItem?.card?.info;

                return (
                    <div
                        key={id}
                        className="flex items-center justify-between border-t border-gray-300 py-4"
                    >
                        {/* Left - Food image */}
                        <img
                            src={`${cloudinaryImageIdURL}${imageId}`}
                            alt={name}
                            className="w-20 h-20 rounded-md object-cover"
                        />

                        {/* Middle - Food details */}
                        <div className="flex-1 px-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src={isVeg ? VEG_SYMBOL : NONVEG_SYMBOL}
                                    alt={isVeg ? 'Veg' : 'Non-Veg'}
                                    className="w-4 h-4"
                                />
                                <h3 className="font-semibold text-gray-800">{name}</h3>
                            </div>

                            {/* Price */}
                            <div className="mt-1 text-sm">
                                {formatPrice(finalPrice, price, defaultPrice)}
                            </div>
                        </div>

                        {/* Cart Button */}
                        <CartButton item={cartItem} />
                    </div>
                );
            })}
        </div>
    ) : (
        <EmptyCart />
    )
}

export default Cart