import { removeFromBasket } from "../../services/basket";


const CartItem = ({book, setUpdateBasketItems }) => {
    const removeitem = () => {
        removeFromBasket('65e07035deb88a4a513164ed', book._id);
        setUpdateBasketItems(true);
    }
    return ( 
    <section className="cart-items">
            {/* Single Cart Item */}
            <article className="cart-item">
                <img src={book.image_url} alt="Book Image" />
                <div className="item-details">
                <h3>{book.title }</h3>
                <p>Price: ${book.price.$numberDecimal}</p>
                {/* {/* <label htmlFor="quantity">Quantity:</label> */}
                <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" /> 
                <button className="save-for-later">Save for later</button>
                <button className="remove-item" onClick={removeitem}>Remove</button>
                </div>
                <div className="delivery-info">
                <p>Delivery: $2.60</p>
                <p>Estimated delivery: 29 Feb - 06 Mar</p>
                </div>
            </article>
            </section>
    )};

    export default CartItem;