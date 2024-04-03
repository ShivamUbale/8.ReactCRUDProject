import React, { useContext } from 'react';
import Routing from '../utils/Routing';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Navbar() {
    const [products] = useContext(ProductContext);

    const uniqueCategory = [... new Set(products.map((p, i) => (p.category)))];
    // console.log(uniqueCategory);

    const color = () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;




    return (
        <>
            <nav className='w-[15%] h-full bg-zinc-800 text-zinc-100  pt-4 flex flex-col items-center'>
                <a href="/create" className='px-2 py-2  border rounded border-blue-300 text-blue-300'>Add New Product</a>
                <hr className='w-[80%] my-3' />
                <h1 className='w-[80%] text-2xl mb-3'>Category</h1>


                <ul className='w-[80%] flex flex-col gap-3'>
                    {uniqueCategory.map((c, i) => (
                        <Link key={i}
                            to={`/?category=${c}`} className='flex items-center '>
                            <span style={{ backgroundColor: color() }} className='w-3 h-3 mr-2 rounded-full'></span>
                            {c}
                        </Link>
                    ))}




                </ul>
            </nav>


        </>
    );
}

export default Navbar;