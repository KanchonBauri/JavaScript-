const products = [
    { name: 'shampoo', price: 300, quantity: 3 },
    { name: 'chiruni', price: 100, quantity: 2 },
    { name: 'shirt', price: 700, quantity: 6 },
    { name: 'pant', price: 1200, quantity: 4 },
]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        // console.log(product)
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCart = cartTotal(products);
console.log(shoppingCart);