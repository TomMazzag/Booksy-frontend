const backend_url = "https://booksy-backend.onrender.com";

export const getBookById = async (bookId) => {
    try {
        const requestOptions = {
            method: "GET",
            headers: {},
        };

        const response = await fetch(`${backend_url}/books/find/${bookId}`, requestOptions);

        if (!response.ok) { // More generic check for response.ok
            throw new Error(`Error fetching book with ID ${bookId}: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Assuming the data structure matches what your component expects
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Re-throw to handle in the component if needed
    }
};

export const getAllBooks = async () => {
    try {
        const requestOptions = {
            method: "GET",
            headers: {},
        };

        console.log("Requesting URL:", `${backend_url}/books/all`);
        const response = await fetch(`${backend_url}/books/all`, requestOptions);

        if (!response.ok) { // This checks for any response status outside the 200-299 range
            throw new Error(`Unable to fetch books: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Data received:", data);
        return data.books; // Ensure your API response structure includes a 'books' array
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Allows for catching and handling the error in the component
    }
};

export const getBooksByTitle = async ( title ) => {
        const requestOptions = {
        method: "GET",
        headers: {}
        };
    
        const response = await fetch(
        `${backend_url}/books/search/${title}`
        ,requestOptions
        );
    
        if (response.status !== 200) {
        throw new Error("Unable to fetch books");
        }
    
        const data = await response.json();
        return data;
    };

    export const getBooksByAuthor = async ( author ) => {
        const requestOptions = {
        method: "GET",
        headers: {}
        };
    
        const response = await fetch(
        `${backend_url}/books/search/${author}`
        ,requestOptions
        );
    
        if (response.status !== 200) {
        throw new Error("Unable to fetch books");
        }
    
        const data = await response.json();
        return data;
    };

    // export const getBookByIsbn = async ( isbn ) => {
    //     const requestOptions = {
    //     method: "GET",
    //     headers: {}
    //     };
    
    //     const response = await fetch(
    //     `${backend_url}/books/search/${isbn}`
    //     ,requestOptions
    //     );
    
    //     if (response.status !== 200) {
    //     throw new Error("Unable to fetch books");
    //     }
    
    //     const data = await response.json();
    //     return data;
    // };