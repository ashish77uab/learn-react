import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { productionSchema } from '../../utils/validation'

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

            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
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
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="title">Title</label>
                                <input value={values.title} onChange={(e) => setFieldValue('title', e.target.value)} className='border border-red-500' type="text" id="title" name="title" required />
                                <ErrorMessage name="title">{msg => <div className='text-red-500 font-medium'>{msg}</div>}</ErrorMessage>

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="description">Description</label>
                                <textarea value={values.description} onChange={handleChange} className='border border-red-500' id="description" name="description" required />
                                <ErrorMessage name="description">{msg => <div className='text-red-500 font-medium'>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className='flex flex-col gap-1'>

                                <label htmlFor="price">Price</label>
                                <input value={values.price} onChange={handleChange} className='border border-red-500' type="number" id="price" name="price" required />
                                <ErrorMessage name="price">{msg => <div className='text-red-500 font-medium'>{msg}</div>}</ErrorMessage>

                            </div>
                            <button type="submit">Submit</button>
                            {isSubmitting && 'Loading....'}
                        </Form>
                    )
                }}
            </Formik>
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