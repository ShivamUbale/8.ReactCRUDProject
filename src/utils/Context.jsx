import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();

export const BackgroundColorContext = createContext();


function Context(props) {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null);

    const getProducts = async () => {
        try {
            const { data } = await axios('/products');
            // console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }




        useEffect(() => {
            getProducts();
            // console.log(products);
        }, [])

        
            const [isDarkMode, setIsDarkMode] = useState(false);
    
        
        

        return (
            <ProductContext.Provider value={[products, setProducts]}>
                <BackgroundColorContext.Provider value={[ isDarkMode, setIsDarkMode ]}>
                    {props.children}
                </BackgroundColorContext.Provider>
            </ProductContext.Provider>
        );
    }

    export default Context;