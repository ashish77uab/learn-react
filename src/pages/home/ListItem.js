import React from 'react'

const ListItem = ({ item, removeItem, index }) => {
    return (
        <div className='flex items-center gap-2'>
            <div>
                {item}
            </div>

            <button className='px-4 py-1 bg-red-500' onClick={() => removeItem(index)}>Remove Item</button>            </div>
    )
}

export default ListItem