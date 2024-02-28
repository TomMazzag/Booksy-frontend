// src/services/Filters.js



const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

export const getAllBooks = async (categories) => {
    const requestOptions = {
        method: "GET"
    };

    let categoriesString = categories.join(",")
    console.log(categoriesString)

    const response = await fetch( 
        `${BACKEND_URL}/books/filter?categories=${categoriesString}`,
        requestOptions
    );

    if (response.status !== 200) {
        throw new Error("Unable to fetch books")
    }

    const data = await response.json();
    return data
};