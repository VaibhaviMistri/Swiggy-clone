import React, { useEffect, useState } from "react";
import { cloudinaryImageIdURL } from "../utils/constants";
import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resData === null) {
    return <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
  }

  const { name, cloudinaryImageId, areaName, cuisines, avgRating, costForTwoMessage, sla } =
    resData?.data?.cards[2]?.card?.card?.info || {};  
  
  const categories =
    resData?.data?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
  
  return (
    <>
      <h1 className="w-3/4 text-3xl m-auto pb-4 font-bold flex justify-start">
        {name}
      </h1>
      <div className="w-3/4 border-slate-300 border-8 rounded-3xl m-auto flex justify-between p-2 shadow-md">
        <div className="m-1 font-semibold">
          <h2 className="mb-3">⭐{`${avgRating} • ${costForTwoMessage}`}</h2>
          <h2 className="mb-3 text-orange-500">🍴{cuisines.join(", ")}</h2>
          <h2 className="mb-3">📍Outlet <span className="text-slate-500">{areaName} ▾</span></h2>
          <h2 className="">⌛{sla?.slaString}</h2>
        </div>
        <img
          src={`${cloudinaryImageIdURL}${cloudinaryImageId}`}
          alt="Restaurant photo"
          className="w-36 border rounded-lg"
        />
      </div>
      <hr className="w-3/4 mt-3 mx-auto" />
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          categoryData={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={(() => setShowIndex(index))}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;