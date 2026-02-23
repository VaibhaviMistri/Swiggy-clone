import React, { useEffect, useState } from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import useRestaurants from "../utils/useRestaurants";
import useFilterRestaurants from "../utils/useFilterRestaurants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const { restaurantData, loading } = useRestaurants();
  const {
    filteredRestaurants,
    setFilteredRestaurants,
    message,
    searchRestaurants,
    filterTopRated,
  } = useFilterRestaurants(restaurantData);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestaurants(restaurantData);
  }, [restaurantData, setFilteredRestaurants]);

  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false) {
    return <OfflinePage />
  }

  return loading ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
  ) : (
    <div>
      <div className="flex mx-3 justify-between">
        <div className="flex justify-start">
          <input
            type="text"
            className="bg-slate-200 border-slate-300 border-2 rounded-md indent-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-zinc-400  border-slate-500 border-2 rounded-lg px-2 mx-2"
            onClick={() => searchRestaurants(searchText)}
          >
            Search
          </button>
          {message && <h1 className="text-red-700">No Restaurant Found</h1>}
        </div>
        <button
          className="bg-slate-200 px-2 border-slate-300 border-2 rounded-lg mx-8"
          onClick={filterTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-start">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;