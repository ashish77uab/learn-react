import React, { useContext } from 'react'
import DiffButton from './DiffButton'
import { ArrayContext } from '.'

const ActionButton = () => {
    const [array, setArray] = useContext(ArrayContext)
    return (
        <div>
            <DiffButton />
            <div>

            </div>
        </div>
    )
}

export default ActionButton