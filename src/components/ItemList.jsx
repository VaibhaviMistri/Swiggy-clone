import React from 'react'
import { cloudinaryImageIdURL, NONVEG_SYMBOL, VEG_SYMBOL } from '../utils/constants';
import CartButton from './CartButton';
import { formatPrice } from '../utils/formatPrice';

const ItemList = ({ itemCards }) => {
    return (
        <>
            <div>
                <ul>
                    {itemCards.map((item) => {
                        const {
                            id, isVeg, name, finalPrice, price, defaultPrice,
                            imageId, ratings, description
                        } = item?.card?.info;

                        return (
                            <li key={id} className="border-b py-6">
                                <div className="flex justify-between px-3">
                                    <div className="w-3/4">
                                        <img
                                            src={isVeg ? VEG_SYMBOL : NONVEG_SYMBOL}
                                            alt={isVeg ? "Veg" : "Non-Veg"}
                                            className="w-5"
                                        />

                                        <p className="text-lg font-bold text-gray-600">{name}</p>
                                        <p className="mb-3">{formatPrice(finalPrice, price, defaultPrice)}</p>

                                        {ratings?.aggregatedRating?.rating && (
                                            <p className="mb-5 text-green-700 font-bold text-sm">
                                                ⭐{ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
                                            </p>
                                        )}

                                        {description && (
                                            <p className="text-xs text-gray-500">{description}</p>
                                        )}
                                    </div>

                                    <div className="relative w-36 h-36 my-auto">
                                        <img
                                            src={`${cloudinaryImageIdURL}${imageId}`}
                                            alt={name}
                                            className="w-full h-full rounded-xl object-cover border"
                                        />
                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                            <CartButton item={item} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </>
    )
}

export default ItemList