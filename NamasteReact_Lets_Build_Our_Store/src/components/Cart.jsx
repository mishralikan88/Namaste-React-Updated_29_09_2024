import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    // Subscribing to the items present inside cart slice of the store
    const cartItems = useSelector(store => store.cart.items)

    console.log(">>>>>>>>", cartItems)

    // Subscribing to the whole store.
    // const store = useSelector((store)=>store)
    // const cartItems = store.cart.items

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div>
                <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>clear cart</button>
                {/* Component Reusability */}
                {cartItems.length === 0 && <h1>Cart is empty.Add items to the cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart