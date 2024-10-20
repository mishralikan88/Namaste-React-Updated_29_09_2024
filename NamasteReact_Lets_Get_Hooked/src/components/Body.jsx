import XYZ from "../components/RestaurantCard";
import { resList } from "../utils/mockData"
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating >= 4)
                        setListOfRestaurants(filteredRestaurants)
                      
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant, index) => {
                    return <XYZ {...restaurant?.info} key={restaurant?.info?.id} />
                })}
            </div>
        </>
    )
}

export default Body
