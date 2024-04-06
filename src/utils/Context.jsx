import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();

export const BackgroundColorContext = createContext();


function Context(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null);

    // const getProducts = async () => {
    //     try {
    //         const { data } = await axios('/products');
    //         setProducts(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    //     useEffect(() => {
    //         getProducts();
    //     }, [])


        return (
            <ProductContext.Provider value={[products, setProducts]}>
                <BackgroundColorContext.Provider value={[ isDarkMode, setIsDarkMode ]}>
                    {props.children}
                </BackgroundColorContext.Provider>
            </ProductContext.Provider>
        );
    }

    export default Context;