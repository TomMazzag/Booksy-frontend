// src/services/users.jsx

const backend_url = "https://booksy-backend.onrender.com";
// const backend_url = "http://localhost:3000";

export const getUserById = async (userId) => {
    try {
        const requestOptions = {
            method: "GET",
            headers: {},
        };

        const response = await fetch(`${backend_url}/users/${userId}`, requestOptions);

        if (!response.ok) {
            throw new Error(`Error fetching user with ID ${userId}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; 
    }
};
