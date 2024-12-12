import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0)
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId)
    const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info || {};

    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((element) => element?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (restaurantInfo === null) ? <Shimmer /> : (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>{name + " - restaurant ID:" + resId}</h1>
            <p>{cuisines.join(', ')}-{costForTwoMessage}</p>

            {/* categories accordions */}

            {categories.map((category, index) => <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex} // Display the accordion body only when index matches showIndex
                setShowIndex={() => setShowIndex(index)} // Passing setShowIndex function to the child
                index={index} // Passing the index of each accordion
            />)}

        </div>
    )
}

export default RestaurantMenu