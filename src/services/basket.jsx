// basketService.js

const backendUrl = "https://booksy-backend.onrender.com";
// const backendUrl = "http://127.0.0.1:3000"; 

export const addToBasket = async (item, userId) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ item: item })
        };

        const response = await fetch(`${backendUrl}/basket/${userId}/add`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error adding item to basket: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Assuming the data structure matches what your component expects
    } catch (error) {
        console.error("Add to basket error:", error.message);
        throw error;
    }
};

export const updateItemQuantity = async (userId, itemId, quantity) => {
    try {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ quantity })
        };

        const response = await fetch(`${backendUrl}/basket/update/${userId}/${itemId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error updating item quantity: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Assuming the data structure matches what your component expects
    } catch (error) {
        console.error("Update item quantity error:", error.message);
        throw error;
    }
};

export const removeFromBasket = async (userId, itemId) => {
    try {
        const requestOptions = {
            method: "DELETE"
        };

        const response = await fetch(`${backendUrl}/basket/${userId}/remove/${itemId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error removing item from basket: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Assuming the data structure matches what your component expects
    } catch (error) {
        console.error("Remove from basket error:", error.message);
        throw error;
    }
};


export const getBasket = async (userId) => {

    try {
        const response = await fetch(`${backendUrl}/basket/${userId}`);
        if (!response.ok) {
            throw new Error(`Error fetching basket items: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Assuming the data structure matches what your component expects
    } catch (error) {
        console.error("Get basket error:", error.message);
        throw error;
    }
};
