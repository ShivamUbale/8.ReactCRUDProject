import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { BackgroundColorContext, ProductContext } from '../utils/Context';

function Create() {
    const [isDarkMode, setIsDarkMode] = useContext(BackgroundColorContext);
    const navigate = useNavigate();
    const [products, setProducts] = useContext(ProductContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    
    const sendingData = (data) => {
        console.log('Submitting form data:', data);
        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        // Add the ID to the data
        const newData = { ...data, id: newId };
        setProducts([...products, newData]);
        localStorage.setItem('products', JSON.stringify([...products, newData]));
        reset();
        navigate('/');
    }

    
    
    return (
        <form className='w-full p-16 pt-24 lg:w-4/5 mx-auto lg:p-28 flex flex-col gap-3 items-center' onSubmit={handleSubmit(sendingData)}>
            <h1 className={`w-full text-xl ${isDarkMode ? 'text-zinc-200' : 'text-black'} whitespace-nowrap lg:text-3xl pb-1 lg:w-3/4`}>Add New Product</h1>

            <input {...register("image", { required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/ })} className={`w-full lg:text-xl p-3 ${isDarkMode ? 'bg-zinc-600 text-zinc-200' : 'bg-zinc-100'} lg:w-3/4 rounded focus:outline-none focus:ring focus:border-blue-500`} type="text" placeholder='Image link' />
            {errors.image && <span className="text-red-500">Please enter a valid image URL</span>}



            <input {...register("title", { required: true, minLength: 2, maxLength: 50 })} className={`w-full lg:text-xl p-3 ${isDarkMode ? 'bg-zinc-600 text-zinc-200' : 'bg-zinc-100'} lg:w-3/4 rounded focus:outline-none focus:ring focus:border-blue-500`} type="text" placeholder='Title' />
            {errors.title && errors.title.type === "required" && <span className="text-red-500">Title is required</span>}
            {errors.title && errors.title.type === "minLength" && <span className="text-red-500">Title must be at least 2 characters long</span>}
            {errors.title && errors.title.type === "maxLength" && <span className="text-red-500">Title must not exceed 50 characters</span>}


            <div className='w-full flex flex-col gap-3 lg:flex-row lg:gap-0 lg:w-3/4'>
                <input {...register("category", { required: true, minLength: 2, maxLength: 30 })} className={`w-full lg:text-xl p-3 ${isDarkMode ? 'bg-zinc-600 text-zinc-200' : 'bg-zinc-100'} lg:w-[49%] lg:mr-3  rounded focus:outline-none focus:ring focus:border-blue-500`} type="text" placeholder='Category' />
                {errors.category && errors.category.type === "required" && <span className="text-red-500">Category is required</span>}
                {errors.category && errors.category.type === "minLength" && <span className="text-red-500">Category must be at least 2 characters long</span>}
                {errors.category && errors.category.type === "maxLength" && <span className="text-red-500">Category must not exceed 30 characters</span>}



                <input {...register("price", { required: true, pattern: /^\d*\.?\d*$/, min: 0 })} className={`w-full lg:text-xl p-3 ${isDarkMode ? 'bg-zinc-600 text-zinc-200' : 'bg-zinc-100'}  lg:w-[49%]  rounded focus:outline-none focus:ring focus:border-blue-500`} type="number" placeholder='Price' />
                {errors.price && errors.price.type === "required" && <span className="text-red-500">Price is required</span>}
                {errors.price && errors.price.type === "pattern" && <span className="text-red-500">Please enter a valid price</span>}
                {errors.price && errors.price.type === "min" && <span className="text-red-500">Price must be greater than or equal to 0</span>}

            </div>


            <textarea {...register("description", { required: true, minLength: 10, maxLength: 500 })} className={`w-full h-1/3 lg:text-xl p-3 ${isDarkMode ? 'bg-zinc-600 text-zinc-100' : 'bg-zinc-100'}  lg:w-3/4 lg:h-1/2 rounded focus:outline-none focus:ring focus:border-blue-500`} placeholder='Enter product description here..'></textarea>
            {errors.description && errors.description.type === "required" && <span className="text-red-500">Description is required</span>}
            {errors.description && errors.description.type === "minLength" && <span className="text-red-500">Description must be at least 10 characters long</span>}
            {errors.description && errors.description.type === "maxLength" && <span className="text-red-500">Description must not exceed 500 characters</span>}


            <div className='w-full lg:w-3/4'>
                <button className='px-2 py-2 lg:px-2 lg:py-2  border rounded border-blue-300 text-blue-300' type='submit'>Add New Product</button>
            </div>

        </form>
    );
}

export default Create;