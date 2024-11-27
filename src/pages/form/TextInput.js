import { ErrorMessage } from 'formik'
import React from 'react'

const TextInput = ({ value, type = 'text', name, label, ...rest }) => {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label htmlFor={name}>{label}</label>}
            <input value={value} {...rest} className='border border-red-500' type={type} id={name} name={name} required />
            <ErrorMessage name={name}>{msg => <div className='text-red-500 font-medium'>{msg}</div>}</ErrorMessage>

        </div>
    )
}

export default TextInput