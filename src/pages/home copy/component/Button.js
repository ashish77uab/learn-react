import React from 'react'

const Button = ({ setActiveTab, activeTab, item, activeClass, normalClass }) => {
    return (
        <button onClick={() => setActiveTab(item)} className={activeTab === item ? activeClass : normalClass}>
            {item}
        </button>
    )
}

export default Button