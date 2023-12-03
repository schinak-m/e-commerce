export function setProducts(state, products) {
    state.products = products
}

export function setCategories(state, category) {
    state.categories = category
}

export function addToCart(state, {product, quantity}){
    const productInCart = state.cart.find(item => item.id === product.id) //gibt den wert des ersten elements zurück, das den test besteht
    if(productInCart){
        productInCart.quantity += quantity //wenn das produkt bereits im warenkorb ist, erhöhen wir die menge
    } else {
        product.quantity = quantity //wenn das produkt noch nicht im warenkorb ist, setzten wir sie auf die gewünschte menge
        state.cart.push(product)
    }
}

export function removeFromCart(state, product){
    const index = state.cart.indexOf(product)
    if(index > -1){
        state.cart.splice(index, 1)
    }
}

export function clearCart(state){
    state.cart = ''
}
