import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restaurantData = await axios.get(MENU_API + resId);
    setResData(restaurantData?.data);
  };

  return resData;
};

export default useRestaurantMenu;