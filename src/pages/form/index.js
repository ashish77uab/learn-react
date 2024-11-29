import React, { createContext, useReducer } from 'react'
import Button from './Button';
export const ArrayContext = createContext(null);
const initalNumber = 0
const arrayChangeFunction = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return state + 1
        }
        case 'decrement': {
            return state - 1
        }
        case 'reset': {
            return initalNumber
        }
        case 'incrementby': {
            return state + action.payload
        }
        default: {
            return state
        }
    }
    // if (action.type === 'increment') {
    //     return state + 1
    // } else if (action.type === 'decrement') {
    //     return state - 1
    // } else if (action.type === 'reset') {
    //     return initalNumber
    // } else if (action.type === 'incrementby5') {
    //     return state + 5
    // }

}
const ProductForm = () => {
    const [state, dispatch] = useReducer(arrayChangeFunction, initalNumber)
    return (
        <div className='max-w-md p-4'>
            <div>
                {
                    state
                }
            </div>
            <Button onClick={() => dispatch({ type: 'increment', payload: '' })} variant='primary' buttonText={'Increment'} />
            <Button onClick={() => dispatch({ type: 'decrement', payload: '' })} variant='primary' buttonText={'Decrement'} />
            <Button onClick={() => dispatch({ type: 'reset', payload: '' })} variant='primary' buttonText={'Reset'} />
            <Button onClick={() => dispatch({ type: 'incrementby', payload: 10 })} variant='primary' buttonText={'Increment By 10'} />


        </div>
    )
}

export default ProductForm