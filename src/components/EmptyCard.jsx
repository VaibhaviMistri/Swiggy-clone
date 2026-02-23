import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                alt="Empty Cart"
                className="w-48 mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
                You can go to home page to view more restaurants and add items to your cart.
            </p>
            <Link
                to="/"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-200"
            >
                See Restaurants
            </Link>
        </div>
    );
};

export default EmptyCart;