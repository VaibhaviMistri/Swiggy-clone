import { cloudinaryImageIdURL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } =
    restaurantData?.info;
  
  const { slaString } = restaurantData?.info?.sla;

  return (
    <div className="w-56 h-[30rem] mx-3 my-2 p-3 border-slate-200 border-2 rounded-xl hover:cursor-pointer hover:bg-slate-200">
      <img
        src={`${cloudinaryImageIdURL}${cloudinaryImageId}`}
        alt=""
        className="border rounded-lg"
      />
      <h1 className="text-xl">{name}</h1>
      <h4 className="text-lg">{avgRating}</h4>
      <h4>{slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;