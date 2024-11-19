import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const errObj = useRouteError()
    const { status, statusText } = errObj // object destructuring

    return (
        <div>{status + ":" + statusText}</div>
    )
}

export default Error    