//const BACKEND_URL = "https://booksy-backend.onrender.com"
const BACKEND_URL = "http://127.0.0.1:3000"

export const getAllReviewsForBook = async (book_id) => {
    const requestOptions = {
        method: "GET"
    };

    const response = await fetch( 
        `${BACKEND_URL}/reviews/all/${book_id}`,
        requestOptions
    );

    if (response.status !== 200) {
        throw new Error("Unable to fetch books")
    }

    const data = await response.json();
    return data
};