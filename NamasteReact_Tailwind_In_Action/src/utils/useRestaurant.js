import { MENU_API } from "../utils/constants";
import { useState,useEffect } from "react";

export const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestaurantInfo(json.data)
    }
    return restaurantInfo
}