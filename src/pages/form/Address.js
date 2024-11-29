import React, { useState } from 'react'

const Address = ({ array, setArray }) => {

    return (
        <div>
            <div className='flex items-center gap-2'>{
                array?.map((item) => {
                    return <div key={item}
                        className='w-8 h-8 flex items-center justify-center font-bold'
                        onClick={() => setArray(array.filter((i) => i !== item))}>
                        {item}

                    </div>
                })
            }</div>
        </div >
    )
}

export default Address