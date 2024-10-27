import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, sla }) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res_logo"
                alt="res_food_image"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{"Rating: " + avgRating + " star"}</h4>
            <h4>{sla?.lastMileTravel}</h4>
        </div>
    )
}

export default RestaurantCard