import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";
import axios from "axios";

const useRestaurants = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(SWIGGY_API);        
        const restaurants =
          res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setRestaurantData(restaurants);        
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { restaurantData, loading };
};

export default useRestaurants;