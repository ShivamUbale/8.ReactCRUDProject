import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BackgroundColorContext, ProductContext } from '../utils/Context';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';

function Details() {
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useContext(ProductContext);



    useEffect(() => {
        if (!product) {
            setProduct(products.filter(p => p.id == id)[0]);
        }
    }, []);
    // console.log(products[id].title);

    const DeleteHandler = (id) => {
        const filterProducts = products.filter(p => p.id !== id);
        setProducts(filterProducts);
        localStorage.setItem('products', JSON.stringify(filterProducts));
        navigate('/');
    }

    return product ? (
        <div className='w-[80%] mx-auto bg-zinc-200 flex justify-center items-center gap-20'>
            <img className='w-[25%] mix-blend-multiply'
                src={`${product.image}`} alt="" />
            <div className='w-[40%]'>
                <h1 className='text-4xl'>{product.title}</h1>
                <h3 className='my-5 text-zinc-500'>{product.category}</h3>
                <h2 className='mb-3 text-blue-300'>${product.price}</h2>
                <p className='mb-5'>{product.description}</p>
                <Link to={`/edit/${product.id}`} className='mr-4 px-4 py-2  border rounded border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white'>Edit</Link>
                <button onClick={() => DeleteHandler(product.id)} className='px-4 py-2  border rounded border-red-300 text-red-300 hover:bg-red-300 hover:text-white'>Delete</button>
            </div>

        </div>
    ) : (<Loading />);
}

export default Details; 