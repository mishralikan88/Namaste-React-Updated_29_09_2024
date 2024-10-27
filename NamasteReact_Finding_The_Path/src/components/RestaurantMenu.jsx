import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    // When the resId value in the URL changes, the useParams hook in React Router will detect this change, causing the RestaurantMenu component to re-render. This allows RestaurantMenu to display information based on the new resId value dynamically.
    const { resId } = useParams(); 

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestaurantInfo(json.data)
    }

    const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString } = restaurantInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};


    return (restaurantInfo === null) ? <Shimmer /> : (
        <div className="menu">
            <h1>{name+" - restaurant ID:"+resId}</h1>
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
