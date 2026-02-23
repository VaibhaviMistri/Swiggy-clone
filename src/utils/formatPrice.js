// utils/formatPrice.js
export const formatPrice = (finalPrice, price, defaultPrice) => {
  if (finalPrice) {
    return (price || defaultPrice) / 100 > finalPrice / 100
      ? `₹${(price || defaultPrice) / 100} → ₹${finalPrice / 100}`
      : `₹${finalPrice / 100}`;
  }
  return `₹${(price || defaultPrice) / 100}`;
};
