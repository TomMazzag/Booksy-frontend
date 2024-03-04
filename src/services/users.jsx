// const backend_url = "https://booksy-backend.onrender.com";
const backend_url = 'http://localhost:3000';

export const updateUserLikedList = async (user_id, bookId, status) => {

    const requestOptions = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id: user_id, bookId: bookId, status: status }),
    };
    console.log(JSON.stringify({user_id: user_id, bookId: bookId, status: status }));

    const response = await fetch(`${backend_url}/users/like`, requestOptions);

    if (response.status === 200) {
        return `Response status: ${status}: the status has been updated successfully`;
    } else {
        throw new Error(
            `Received status ${response.status} when updating status. Expected 200`,
            );
        }
}


export const checkLikedBook = async (user_id, bookId) => {
    const requestOptions = {
        method: "GET",
    };

    const URL = new URLSearchParams({ user_id: String(user_id), bookId: String(bookId) });

    const response = await fetch(`${backend_url}/users/liked/?` + URL ,requestOptions);
    console.log("I am the response:", response)

    if (response.status !== 200) {
        return response
    }

    const data = await response.json();
    console.log(data)
    console.log(data.state)
    return data.state
}

