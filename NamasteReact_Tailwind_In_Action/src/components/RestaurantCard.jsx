import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, sla }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl p-4 max-w-sm mx-auto">
            <img
                className="w-full h-40 rounded-t-lg object-cover"
                alt="Restaurant food"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-gray-600 text-sm mt-1 truncate overflow-hidden">{cuisines.join(', ')}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-yellow-600">
                        ⭐ {avgRating} Star
                    </span>
                    <span className="text-sm text-gray-500">
                        {sla?.lastMileTravel} km away
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;