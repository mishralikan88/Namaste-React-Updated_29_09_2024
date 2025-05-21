import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {

    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="p-6 bg-gray-50">
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item?.card?.info?.id}
                    className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm flex hover:shadow-lg transition-shadow duration-200"
                >
                    <div className="flex-shrink-0 relative w-32 h-32">
                        <img
                            src={CDN_URL + item?.card?.info?.imageId}
                            className="w-full h-full object-cover rounded-lg"
                            alt={item?.card?.info?.name}
                        />
                        <button
                            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md shadow hover:bg-green-600 transition-colors duration-200"
                            onClick={() => handleAddItem(item)}
                        >
                            Add +
                        </button>
                    </div>
                    <div className="flex-1 ml-4 text-left">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item?.card?.info?.name}
                            </h2>
                            <span className="text-green-600 font-bold">

                                ₹{item?.card?.info?.price ?
                                    item?.card?.info?.price / 100
                                    :
                                    item?.card?.info?.defaultPrice / 100}

                            </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
