import React, { createContext } from 'react'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy, reset } from '../../redux/counterAction';
import { productAdd, productRemove } from '../../redux/productAction';
export const ArrayContext = createContext(null);

const ProductForm = () => {
    const counter = useSelector(state => state.counter)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(products, 'products')

    return (
        <div className='max-w-5xl p-4'>
            <div className='text-center font-semibold text-2xl'>
                {
                    products?.products?.map((product) => {
                        return <div key={product.id} className='w-1/3 p-4 bg-slate-50 rounded-md'>
                            <h1>{product.id}</h1>
                            <h1>{product.name}</h1>
                        </div>
                    })
                }
            </div>
            <div className='flex items-center flex-wrap gap-4'>
                <Button onClick={() => dispatch(increment())} variant='primary' buttonText={'Increment'} />
                <Button onClick={() => dispatch(decrement())} variant='primary' buttonText={'Decrement'} />
                <Button onClick={() => dispatch(reset())} variant='primary' buttonText={'Reset'} />
                <Button onClick={() => dispatch(incrementBy(10))} variant='primary' buttonText={'Increment By 10'} />

                <Button onClick={() => dispatch(increment())} variant='primary' buttonText={'Increment'} />
            </div>
            <div className='flex items-center flex-wrap gap-4 my-4'>
                <Button onClick={() => dispatch(productAdd({ id: 2, name: 'Android' }))} variant='primary' buttonText={'Add Product'} />
                <Button onClick={() => dispatch(productRemove({ id: 2 }))} variant='primary' buttonText={'Remove Product'} />

            </div>

        </div>
    )
}

export default ProductForm