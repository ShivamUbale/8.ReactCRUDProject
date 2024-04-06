import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();

export const BackgroundColorContext = createContext();


function Context(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios('/products');
                setProducts(data);
                localStorage.setItem('products', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // Fetch products only if they are not already present in local storage
        if (!products) {
            fetchProducts();
        }
    }, []);


        return (
            <ProductContext.Provider value={[products, setProducts]}>
                <BackgroundColorContext.Provider value={[ isDarkMode, setIsDarkMode ]}>
                    {props.children}
                </BackgroundColorContext.Provider>
            </ProductContext.Provider>
        );
    }

    export default Context;