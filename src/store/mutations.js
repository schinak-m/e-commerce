export function setProducts(state, products) {
    state.products = products
}

export function setCategories(state, category) {
    state.categories = category
}

export function addToCart(state, {product, quantity}){
    const productInCart = state.cart.find(item => item.id === product.id)
    if(productInCart){
        productInCart.quantity += quantity
    } else {
        product.quantity = quantity
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
