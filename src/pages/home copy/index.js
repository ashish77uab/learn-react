import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'

const Home = () => {
    const counter = useSelector(state => state.counter)


    const [products, setProducts] = useState({})
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const skip = (page - 1) * limit
    function* fetchData() {
        const productsPromise = yield fetch('https://dummyjson.com/products')
    }


    useEffect(() => {
        const gen = fetchData();
        const promise = gen.next().value;
        promise.then(res => res.json()).then((data) => {
            console.log(data, 'dat')
        });
    }, [])

    // promise.then(data => gen.next(data));
    // const getProducts = async () => {
    //     try {
    //         const { data, status } = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${moment().format('YYYY-MM-DD')}?apiKey=ryiHh0tUuDf6tTdFotqco0iNT0Cjn99_`)
    //         setProducts(data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [limit, skip])
    return (
        <div className=' p-4'>
            <div className="flex item-center gap-2">
                {[10, 15, 20, 25]?.map((item) => {
                    return <button onClick={() => setLimit(item)} className={item === limit ? 'text-red-500 font-bold border border-gray-600 rounded-xl w-10 h-10 flex items-center gap-4 justify-center' : 'text-gray-500 font-bold border border-gray-600 rounded-xl w-10 h-10 flex items-center gap-4 justify-center'}>{item}</button>
                })}

            </div>
            <div>
                {products?.products?.map((item) => {
                    return <div>
                        <h1>{item?.title}</h1>
                    </div>
                })

                }
            </div>
            <div className="flex item-center gap-2">
                {[1, 2, 3, 4, 5]?.map((item, index) => {
                    return <button onClick={() => setPage(item)} className={page === item ? 'text-red-500 font-bold border border-gray-600 rounded-xl w-10 h-10 flex items-center gap-4 justify-center' : 'text-gray-500 font-bold border border-gray-600 rounded-xl w-10 h-10 flex items-center gap-4 justify-center'}>{item}</button>
                })}

            </div>





        </div>
    )
}

export default Home