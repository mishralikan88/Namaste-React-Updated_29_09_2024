import React, { useContext } from 'react'
import userContext from '../utils/UserContext'


const Grocery = () => {
    const { loggedInUser } = useContext(userContext)

    return (
        <>
            <h1>{loggedInUser}</h1>
            <h1>1000 of components in it </h1>
        </>
    )
}

export default Grocery