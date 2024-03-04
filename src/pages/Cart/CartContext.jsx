import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react"; // Import useUser from Clerk

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useUser(); // Use Clerk's useUser hook to access the current user

    useEffect(() => {
        if (user) {
            // Fetch the cart items for the signed-in user
            const fetchUserCartItems = async () => {
                // Your logic to fetch cart items for the user
                // For example: const items = await fetchCartItems(user.id);
                // setCartItems(items);
            };

            fetchUserCartItems();
        }
    }, [user]);

    const addToCart = (item) => {
        // Your logic to add an item to the cart for the current user
        // For example: await addUserCartItem(user.id, item);
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => {
        // Your logic to remove an item from the cart for the current user
        // For example: await removeUserCartItem(user.id, itemId);
        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
