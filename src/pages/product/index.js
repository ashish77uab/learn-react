import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading1 from '../../component/Heading1'
import { useLocation, useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <button onClick={() => navigate("/signin", { state: { pathname: location?.pathname } })}>
                Open Sign In
            </button>
            <button onClick={() => navigate("/register", { state: { pathname: location?.pathname } })}>
                Open Register
            </button>
            <Heading1 title={'Product'} />

        </div>
    )
}

export default Product