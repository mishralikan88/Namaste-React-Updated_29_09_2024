import RestaurantCard, { withVegLabel } from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useContext } from "react";
import userContext from "../utils/UserContext";

const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
};

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOffilteredRestaurants, setListOffilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("listOfRestaurants",listOfRestaurants)

    const { loggedInUser, setUserName } = useContext(userContext)

    // HOC Invocation
    const VegRestaurantCard = withVegLabel(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setListOffilteredRestaurants(restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) return <h1>Looks like you are offline! Please check your internet connection.</h1>;

    return (
        <div>
            <div className="m-4 p-4 bg-white rounded-lg shadow-lg flex items-center space-x-4">
                <input
                    type="text"
                    data-testid="searchInput"
                    className="w-full pl-4 pr-4 py-3 rounded-full bg-gray-100 border border-gray-300 shadow-sm focus:outline-none"
                    placeholder="Search a restaurant"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />
                <button
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold hover:from-green-500 hover:to-green-700 shadow-md transition duration-200"
                    onClick={() => {
                        const filteredRestaurants = filterData(searchText, listOfRestaurants);
                        setListOffilteredRestaurants(filteredRestaurants);
                    }}
                >
                    Search
                </button>

                <div>
                    <label htmlFor="">User Name
                    </label>
                    <input className="border border-black" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listOffilteredRestaurants.length > 0 ? (
                    listOffilteredRestaurants.map((restaurant) => (
                        <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>

                            {restaurant.info?.veg ? <VegRestaurantCard resData={restaurant} /> : <RestaurantCard {...restaurant.info} />}

                        </Link>
                    ))
                ) : (
                    <h1 className="text-center w-full">No restaurant matches your filter</h1>
                )}
            </div>
        </div>
    );
};

export default Body;