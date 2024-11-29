import React, { useContext } from 'react'
import { ArrayContext } from '.'



const DiffButton = () => {
    const [array, setArray] = useContext(ArrayContext)
    return (
        <div>
            <div className='w-8 h-8 flex items-center justify-center font-bold' onClick={() => setArray([...array, 1])}>
                1
            </div>
            <div className='w-8 h-8 flex items-center justify-center font-bold' onClick={() => setArray([...array, 2])}>
                2
            </div>
            <div className='w-8 h-8 flex items-center justify-center font-bold' onClick={() => setArray([...array, 3])}>
                3
            </div>
        </div>
    )
}

export default DiffButton