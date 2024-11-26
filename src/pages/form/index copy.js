import React, { useState } from 'react'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: title,
            description: description,
            price: price
        }
        console.log(formData, 'formData')
        setTitle('')
        setDescription('')
        setPrice('')
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
    const handleTitle = (e) => {
        setTitle(e.target.value)

    }
    const handleDescription = (e) => {
        setDescription(e.target.value)

    }
    return (
        <div className='max-w-md'>
            <form onSubmit={handleSubmit} action="" className='p-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="title">Title:</label>
                    <input value={title} onChange={handleTitle} className='border border-red-500' type="text" id="title" name="title" required />
                </div>


                <div className='flex flex-col gap-1'>
                    <label htmlFor="description">Description:</label>
                    <textarea value={description} onChange={handleDescription} className='border border-red-500' id="description" name="description" required />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="price">Price:</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} className='border border-red-500' type="number" id="price" name="price" required />
                </div>

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default ProductForm