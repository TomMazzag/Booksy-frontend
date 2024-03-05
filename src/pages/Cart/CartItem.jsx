
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { removeFromBasket } from "../../services/basket";
import './CartItem.css';
import { getBookById } from "../../services/books";

const CartItem = ( book, setUpdateBasketItems, onQuantityChange ) => {
    const { user } = useUser();
    console.log("line 8", book)

    const bookData = async () => {
        const data = await getBookById(book)
        console.log(data)
        return data
        
    }

    useEffect(() => {
        bookData();
    })
    

    const removeItem = () => {
        removeFromBasket(user.id, book._id);
        setUpdateBasketItems(prev => !prev); // Trigger update for re-fetching items
    };

    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        onQuantityChange(book._id, newQuantity); // Call the passed in onQuantityChange function
    };

    return (
        <section className="cart-items">
            {/* Single Cart Item */}
            <article className="cart-item">
                <img src={bookData.image_url} alt={book.title} />
                <div className="item-details">
                    <h3>{bookData.title}</h3>
                    <p>Price: £{bookData.price}</p>
                    <input
                        type="number"
                        id={`quantity-${book._id}`}
                        name="quantity"
                        min="1"
                        defaultValue="1"
                        onChange={handleQuantityChange} // Add onChange event to input
                    />
                    <button className="save-for-later">Save for later</button>
                    <button className="remove-item" onClick={removeItem}>Remove</button>
                </div>
                <div className="delivery-info">
                    <p>Delivery: £2.60</p>
                    <p>Estimated delivery: 29 Feb - 06 Mar</p>
                </div>
            </article>
        </section>
    );
};

export default CartItem;
