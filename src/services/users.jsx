const backend_url = "https://booksy-backend.onrender.com";

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

