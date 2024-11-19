import React from 'react'
import ItemList from './ItemList'


const RestaurantCategory = ({ data, showItems, setShowIndex, index, dummy }) => {

    const handleClick = () => {
        // When the accordion is clicked, update the parent's state by passing the index
        setShowIndex(index);
    }

    return (
        <div>
            <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
                {/* Accordion header */}
                <div className='flex justify-between' onClick={handleClick} >
                    <span className='font-bold text-lg'>{data?.title}({data?.itemCards?.length})</span>
                    <span> ⬇️ </span>
                </div>
                {/* According body */}
                {showItems && <ItemList items={data?.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory