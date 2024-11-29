import React, { createContext, useEffect, useState } from 'react'
import Profile from './Profile'
import Address from './Address'
import axios from 'axios';
export const ArrayContext = createContext(null);
const ProductForm = () => {
    const [array, setArray] = useState([])

    const getApiData = async () => {

        try {
            const { status, error, data } = axios.get('https://dummyjson.com/products')

            if (status === 200) {
                setArray(data)
            } else {
                console.log(error)
            }
        } catch (error) {

        }

    }

    useEffect(() => {
        getApiData()
    }, [])
    console.log(array, 'array')

    return (
        <div className='max-w-md p-4'>

            {/* <ArrayContext.Provider value={[array, setArray]}>

                <Profile />
            </ArrayContext.Provider>
            <Address array={array} setArray={setArray} /> */}


        </div>
    )
}

export default ProductForm