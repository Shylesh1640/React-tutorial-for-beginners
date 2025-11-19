import React, { useState } from 'react'; 

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shipping, setShipping] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(Number(event.target.value));
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentMethodChange(event) {
        setPaymentMethod(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (<div>
            <input value={name} onChange={handleChange}/>
            <p>Your name is: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} /> 
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery Instruction'/>
            <p>Comment: {comment}</p>   

            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cashOnDelivery">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment Method: {paymentMethod}</p>

            <label><input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange} />Pickup</label>
            <label><input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange} />Delivery</label>
            <p>Shipping Method: {shipping}</p>

    </div>)
} 
export default MyComponent;