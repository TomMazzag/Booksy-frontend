// src/services/Filters.js


const BACKEND_URL = "https://booksy-backend.onrender.com"

export const getAllBooksByCategory = async (categories) => {
    const requestOptions = {
        method: "GET"
    };

    let categoriesString = categories.join(",")
    let encoded_search_query = encodeURIComponent(categoriesString);
    // console.log(categoriesString)

    const response = await fetch( 
        `${BACKEND_URL}/books/filter?categories=${encoded_search_query}`,
        requestOptions
    );

    if (response.status !== 200) {
        throw new Error("Unable to fetch books")
    }

    const data = await response.json();
    return data
};


export const getAllBooksByPrice = async (price) => {
    const requestOptions = {
        method:"GET",
        headers: {}
    };
    const response = await fetch(
        `${BACKEND_URL}/books/filter?${price}`,
        requestOptions
    );

    if (response.status !== 200) {
        throw new Error("Unable to fetch books")
    }

    const data = await response.json()
    return data
}