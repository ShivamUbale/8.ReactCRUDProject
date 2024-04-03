import React, { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import axios from '../utils/Axios';


function Home() {

    const [products] = useContext(ProductContext);

    const { search } = useLocation();
    const unique_category = decodeURIComponent(search.split('=')[1]);

    // console.log(unique_category);

    const [category_products, setCategoryProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (unique_category !== 'undefined' || category_products === 'null' || category_products === 'undefined') {
                    // const { data } = await axios(`/products/category/${unique_category}`);
                    // setCategoryProducts(data);
                    setCategoryProducts(products.filter((p) => p.category == unique_category))
                } else {
                    setCategoryProducts(products); // If unique_category is 'undefined', use products from context
                }

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [search, unique_category, products]);

    // console.log("Category Products:", category_products);
    // console.log("HomePage", products);
    return (category_products ? (
        <>
            <Navbar />
            <div className='w-[85%] h-full pt-20 pb-5 pl-10 flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto'>


                {category_products.map((p, i) => (
                    <Link key={i} to={`/details/${p.id}`} className='card w-1/5 h-2/5  p-4  border shadow rounded bg-white'>
                        <div className='hover:scale-110 w-full h-4/5 mb-3 bg-contain bg-no-repeat bg-center '
                            style={
                                {
                                    backgroundImage: `url(${p.image})`,
                                }
                            }
                        ></div>
                        <h1 className='hover:text-blue-500 text-center h-11 overflow-hidden'>{p.title}</h1>
                    </Link>
                ))}



            </div >
        </>
    ) : (<Loading />)
    );
}

export default Home;






