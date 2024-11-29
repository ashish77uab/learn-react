import React, { createContext, useState } from 'react'
import Profile from './Profile'
import Address from './Address'
export const ArrayContext = createContext(null);
const ProductForm = () => {

    const [array, setArray] = useState([])
    return (
        <div className='max-w-md p-4'>
            <ArrayContext.Provider value={[array, setArray]}>

                <Profile />
            </ArrayContext.Provider>
            <Address array={array} setArray={setArray} />


        </div>
    )
}

export default ProductForm