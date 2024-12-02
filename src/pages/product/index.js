import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading1 from '../../component/Heading1'

// ryiHh0tUuDf6tTdFotqco0iNT0Cjn99_
const Product = () => {
    const [products, setProducts] = useState([])
    const getProductData = async () => {
        try {
            const { data, status } = await axios.get('https://dummyjson.com/products')
            setProducts(data?.products)



        } catch (error) {
            console.log(error, 'error')

        }

    }

    useEffect(() => {
        getProductData()

    }, [])
    console.log(products, 'products')

    return (
        <div>
            <Heading1 title={'Product'} />

        </div>
    )
}

export default Product