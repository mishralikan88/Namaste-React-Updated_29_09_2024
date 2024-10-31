import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId)
    
    const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString } = restaurantInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    return (restaurantInfo === null) ? <Shimmer /> : (
        <div className="menu">
            <h1>{name + " - restaurant ID:" + resId}</h1>
            <h2 style={{ display: 'inline-block' }}>{avgRatingString} ({totalRatingsString})</h2>
            <h2 className='cost'>{costForTwoMessage}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu