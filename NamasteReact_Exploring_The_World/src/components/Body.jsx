import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
    const filteredData = restaurants.filter((restaurant) => {
        return restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    })
    return filteredData
}

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOffilteredRestaurants, setListOffilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOffilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search a restaurant"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurants = filterData(searchText, listOfRestaurants)
                            setListOffilteredRestaurants(filteredRestaurants)

                        }}
                    >Search</button>
                </div>

            </div>
            <div className="res-container">
                {listOffilteredRestaurants.length > 0 ? (
                    listOffilteredRestaurants.map((restaurant) => (
                        <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    ))
                ) : (
                    <h1>No restaurant matches your filter</h1>
                )}
            </div>
        </>
    )
}

export default Body