import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { productionSchema } from '../../utils/validation'
import TextInput from './TextInput'
import Button from './Button'

const ProductForm = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        color: {
            red: false,
            green: false,
            blue: false,
        },

    })
    const [count, setCount] = useState(5)
    // setCount((prevVal) => prevVal)
    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        console.log(count, 'nine')

    }
    console.log(count, 'count')




    // setForm({})


    const handleSubmit = (formData, formAction) => {
        console.log(formAction)
        formAction.resetForm()
        console.log(formData, 'formData')

    }
    // const handleSubmit = (e) => {
    //     // Access form values using e.target
    //     e.preventDefault();
    //     const form = e.target;
    //     const title = form.title.value; // Access by 'name' or 'id'
    //     const description = form.description.value;
    //     const price = form.price.value;

    //     // Log values
    //     console.log('Title:', title);
    //     console.log('Description:', description);
    //     console.log('Price:', price);

    // }
    // const handleTitle = (e) => {
    //     setTitle(e.target.value)

    // }
    // const handleDescription = (e) => {
    //     setDescription(e.target.value)

    // }
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })


    }
    const handleCheck = (e) => {
        const { name, checked } = e.target
        console.log(name, checked)
        setForm({ ...form, color: { ...form.color, [name]: checked } })


    }


    return (
        <div className='max-w-md p-4'>
            {true ? 'true' : 'false'}
            <div className='mt-2'>
                <Button onClick={handleClick} variant='primary' buttonText={'Click'} />
            </div>
            {/* <Formik
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
                    productid: '',
                    // category: '',
                    // color: {
                    //     red: false,
                    //     green: false,
                    //     blue: false,
                    // },

                }}
                validationSchema={productionSchema}
                onSubmit={handleSubmit}
                validateOnMount
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    // setFieldTouched,

                }) => {
                    // console.log(values, 'values')
                    // console.log(errors, 'errors')
                    console.log(isSubmitting, 'isSubmitting')
                    return (
                        <Form>
                            <TextInput value={values.productid} name='productid' onChange={handleChange} />
                            <TextInput label={'Title'} value={values.title} name='title' onChange={handleChange} />
                            <TextInput label={'Description'} value={values.description} name='description' onChange={handleChange} />
                            <TextInput label={'Price'} type='number' value={values.price} name='price' onChange={handleChange} />
                            <div className='mt-2'>
                                <Button onClick={handleSubmit} variant='ghost' buttonText={'Submit'} icon={<div className='w-8 h-8 rounded-full bg-yellow-500'></div>} />
                            </div>
                            {isSubmitting && 'Loading....'}
                        </Form>
                    )
                }}
            </Formik> */}

            {/* <form onSubmit={handleSubmit} action="" className='p-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="title">Title:</label>
                    <input value={form.title} onChange={handleChange} className='border border-red-500' type="text" id="title" name="title" required />
                </div>


                <div className='flex flex-col gap-1'>
                    <label htmlFor="description">Description:</label>
                    <textarea value={form.description} onChange={handleChange} className='border border-red-500' id="description" name="description" required />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="price">Price:</label>
                    <input value={form.price} onChange={handleChange} className='border border-red-500' type="number" id="price" name="price" required />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="price">Price:</label>
                    <select name="color" onChange={handleChange} id="">
                        <option value="Electronics">Electronics</option>
                        <option value="Cloth">Cloth</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Category:</label>
                    <div>
                        <input checked={form.color.red} onChange={handleCheck} className='border border-red-500' type="checkbox" id="red" name="red" />
                        <label htmlFor="red">red</label>
                    </div>
                    <div>
                        <input checked={form.color.green} onChange={handleCheck} className='border border-red-500' type="checkbox" id="green" name="green" />
                        <label htmlFor="green">green</label>
                    </div>
                    <div>
                        <input checked={form.color.blue} onChange={handleCheck} className='border border-red-500' type="checkbox" id="blue" name="blue" />
                        <label htmlFor="blue">blue</label>
                    </div>


                </div>

                <button type="submit">Submit</button>
            </form> */}

        </div>
    )
}

export default ProductForm