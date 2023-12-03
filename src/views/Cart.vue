<template>
    <div class="container mx-auto p-5 bg-slate-100">
        <div class="flex shadow-md my-7 mx-15">
            <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl">{{ items }} Items</h2>
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>
                <div v-for="product in cart" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5"> <!-- product Details -->
                        <div class="w-20">
                            <img class="h-24" :src="product.thumbnail" alt="">
                        </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">{{ product.title }}</span>
                            <span class="text-red-500 text-xs">{{ product.brand }}</span>
                            <a @click="remove(product)" href="#"
                                class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                        </div>
                    </div>
                    <!-- Quantity -->
                    <div class="flex justify-center w-1/5">
                        <svg @click="decreaseQuantity(product)" class="fill-current text-gray-600 w-3 cursor-pointer"
                            viewBox="0 0 448 512">
                            <path
                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <input class="mx-2 border text-center w-8" type="text" :value="product.quantity">

                        <svg @click="product.quantity++" class="fill-current text-gray-600 w-3 cursor-pointer"
                            viewBox="0 0 448 512">
                            <path
                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                    <!-- Price and total Price -->
                    <span class="text-center w-1/5 font-semibold text-sm">${{ product.price }}</span>
                    <span class="text-center w-1/5 font-semibold text-sm">${{ product.price * product.quantity }}</span>
                </div>

                <!-- Continue shopping -->
                <router-link :to="{ name: 'AllProducts' }" class="flex font-semibold text-indigo-600 text-sm mt-10">

                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </router-link>
            </div>

            <!-- Order Summary -->
            <div id="summary" class="w-1/4 px-8 py-10 bg-gray-100">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items {{ items }}</span>
                    <span class="font-semibold text-sm">{{ totalCost }}$</span>
                </div>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Shipping</span>
                    <span class="font-semibold text-sm">{{ shippingCost }}$</span>
                </div>

                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>{{ totalCostWithShipping }}$</span>
                    </div>
                    <router-link :to="{ name: 'Checkout' }">
                        <button
                            class="py-2 text-lg font-medium text-blue-500 border border-slate-900 rounded-sm dark:text-gray-200 bg-slate-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase w-full">
                            Checkout
                        </button>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

const store = useStore()
const cart = computed(() => store.state.cart)
const totalCost = computed(() =>
    cart.value.reduce((total, product) => total + product.price * product.quantity, 0)  //adds the cost of each product in the cart
)

const shippingCost = computed(() => cart.value.length > 0 ? 10.00 : 0)
const totalCostWithShipping = computed(() => totalCost.value + shippingCost.value)
const items = cart.value.length

function decreaseQuantity(product) {
    if (product.quantity > 0) {
        product.quantity--
    }
}

function remove(product) {
    store.commit('removeFromCart', product)
}

</script>