import React, { useState } from 'react'
import ChilldA from './ChilldA'
import ChilldB from './ChilldB'

const ParentOne = ({ children }) => {
    const [count, setCount] = useState(0)
    console.log('parent render')
    return (
        <div>
            {children}

            <button onClick={() => setCount(prev => prev + 1)}>increase{count}</button>
            {/* <ChilldA key={'A'} />
            <ChilldB key={'B'} /> */}
        </div>
    )
}

export default ParentOne