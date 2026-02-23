import { useState } from "react";

const useFilterRestaurants = (restaurantData) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [message, setMessage] = useState(false);

  const searchRestaurants = (searchText) => {
    const filteredList = restaurantData.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredList.length === 0) {
      setMessage(true);
    } else {
      setMessage(false);
      setFilteredRestaurants(filteredList);
    }
  };
  const filterTopRated = () => {
    const topRated = restaurantData.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.5
    );
    setFilteredRestaurants(topRated);
  };

  return {
    filteredRestaurants,
    setFilteredRestaurants,
    message,
    searchRestaurants,
    filterTopRated,
  };
};

export default useFilterRestaurants;
