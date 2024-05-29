let totalPrice = 0;
const cartItemList = document.getElementById(`cart-item`);

function addToCart(itemName, itemPrice) {
     const li = document.createElement(`li`);
     li.textContent = `${itemName} - $${itemPrice}`;
     cartItemList.appendChild(li);

     totalPrice += itemPrice;
     document.getElementById(`total`).textContent = `Total: $${totalPrice.toFixed(2)}`;
} 

function placeorder() {
     alert(`Your order has been plased, Total amount: $${totalPrice.toFixed(2)}`)
}