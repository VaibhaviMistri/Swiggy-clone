import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice';

const CartButton = ({ item }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartItem = cartItems.find((cart) => cart.card.info.id === item.card.info.id);


    return cartItem ? (
        <div className='flex items-center justify-between w-28 bg-white border-2 border-gray-200 rounded-xl py-1 px-4 text-lg font-bold shadow-md'>
            <button
                onClick={() => dispatch(removeItem(item.card.info.id))}
                className='px-2'
            >
                -
            </button>
            <span className='text-green-600'>{cartItem.quantity}</span>
            <button
                onClick={() => dispatch(addItem(item))}
                className='px-2 text-emerald-600'
            >
                +
            </button>
        </div>
    ) : (
        <button
            onClick={() => dispatch(addItem(item))}
            className='bg-white border-2 border-gray-200 rounded-xl py-1 px-6 text-lg text-green-600 font-bold shadow-md'
        >
            Add
        </button>
    )
}

export default CartButton