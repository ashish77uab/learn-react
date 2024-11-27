import React from 'react'

const Button = ({ type = 'button', onClick, buttonText, disabled = false, variant = 'primary', icon }) => {

    const variantObject = {
        primary: ' bg-blue-500 ',
        secondary: ' bg-red-500 ',
        ghost: ' bg-cyan-500 ',
    }

    return (
        <button onClick={onClick} className={`${variantObject[variant]} px-6 py-2 font-medium text-base rounded-lg text-white flex items-center gap-1`} disabled={disabled} type={type}>{buttonText} {icon}</button>
    )
}

export default Button