import React from 'react'

const Heading1 = ({ title, subHeading, name }) => {
    return (
        <div>
            <h1 className='text-xl text-red-500 font-semibold'>{title}</h1>
            <h6 className='text-sm text-blue-500 font-semibold'>{subHeading}</h6>
            <h4 className='text-sm text-blue-500 font-semibold'>{name}</h4>
        </div>
    )
}

export default Heading1