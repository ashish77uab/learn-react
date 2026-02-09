import React from 'react'
import ChilldA from './ChilldA'
import ChilldB from './ChilldB'

const Wrapper = () => {
    return (
        <div>
            <ChilldA key={'A'} />
            <ChilldB key={'B'} />
        </div>
    )
}

export default Wrapper