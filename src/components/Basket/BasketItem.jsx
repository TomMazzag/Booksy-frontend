
import { useEffect } from "react";
import { removeFromBasket } from "../../services/basket";
import './BasketItem.css';

const BasketItem = ({ user, book, setUpdateBasketItems, onQuantityChange }) => {

    const removeItem = () => {
        removeFromBasket(user.id, book._id);
        setUpdateBasketItems(prev => !prev); // Trigger update for re-fetching items
    };

    // console.log("book:", book)

    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        onQuantityChange(book._id, newQuantity); // Call the passed in onQuantityChange function
    };
    
    return (
        <section className="cart-items">
            {/* Single Cart Item */}
            <article className="cart-item">
                <img src={book.image_url} alt={book.title} />
                <div className="item-details">
                    <h3>{book.title}</h3>
                    <p>Price: £{book.price.$numberDecimal}</p>
                    <input
                        type="number"
                        id={`quantity-${book._id}`}
                        name="quantity"
                        min="1"
                        defaultValue="1"
                        onChange={handleQuantityChange} // Add onChange event to input
                    />
                    <button className="save-for-later">Add to Favourites</button>
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

export default BasketItem;
