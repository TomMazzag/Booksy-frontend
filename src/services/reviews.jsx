const BACKEND_URL = "https://booksy-backend.onrender.com"
// const BACKEND_URL = "http://127.0.0.1:3000"

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

export const sendNewReview = async (review) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        };

        const response = await fetch(`${BACKEND_URL}/reviews/create`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error adding review: ${response.statusText}`);
        }
        
    } catch (error) {
        console.error("Add review error:", error.message);
        throw error;
    }
}