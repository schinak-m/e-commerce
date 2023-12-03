<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary location="right" :width="470">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            <!-- Check if Cart is empty -->
            </v-app-bar-nav-icon>
            <div v-if="cart.length == 0" class="mt-10">
                <div className="h-full flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="pt-3">Your Cart is Empty.</span>
                </div>
            </div>
            <!-- If Cart is not empty -->
            <div v-else>
                <div v-for="product in cart" :key="product.id"
                    class="block mx-2 pb-6 p-3 mb-6 -mx-4 border-b border-gray-200 dark:border-gray-700 md:flex">
                    <div class="w-full px-4 mb-5 mr-3 md:w-1/3 md:mb-0">
                        <div class="flex w-full h-96 md:h-32 md:w-32">
                            <img :src="product.thumbnail" alt="" class="object-cover w-full h-full">
                        </div>
                    </div>
                    <div class="w-full px-4 md:2/3">
                        <div class="flex justify-between">
                            <div class="">
                                <h2 class="mb-2 text-xl font-bold dark:text-gray-900">{{ product.title }}</h2>
                                <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-500 "> Quantity: {{
                                    product.quantity }}</p>
                                <div>
                                    <button @click="remove(product)"
                                        class="px-4 py-2 font-medium text-center text-blue-700 border border-blue-500 rounded-md dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 hover:bg-blue-600 hover:text-gray-100">Remove</button>
                                </div>
                            </div>
                            <div>
                                <p class="text-lg font-bold text-blue-500 ml-1 ">${{ product.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cost -->
                <div class="mx-7">
                    <div class="flex justify-between text-base dark:text-gray-400">
                        <p>Subtotal</p>
                        <p>${{ totalCost }}</p>
                    </div>
                    <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">Shipping calculated at checkout period.</p>
                    <div class="flex items-center justify-center mt-6">
                        <router-link :to="{ name: 'Checkout' }" class="w-full">
                            <button
                                class="w-full py-3 text-lg font-medium text-blue-500 border border-slate-900 rounded-md dark:text-gray-200 bg-slate-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                Checkout
                            </button></router-link>
                    </div>
                    <div class="flex items-center justify-center mt-2">
                        <router-link :to="{ name: 'Cart' }" class="w-full">
                            <button
                                class="w-full py-3 text-lg font-medium text-blue-500 border border-slate-900 rounded-md dark:text-gray-900 bg-transparent hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                Shopping Cart
                            </button>
                        </router-link>
                    </div>
                    <div class="flex items-center justify-center mt-6">
                        <p><span class="dark:text-gray-400">or,</span><router-link :to="{ name: 'AllProducts' }"
                                class="w-full">
                                <button class="pl-1 text-blue-600 hover:underline dark:text-gray-300">Continue Shopping
                                </button></router-link>
                        </p>
                    </div>
                </div>
            </div>
        </v-navigation-drawer>

        <v-main>
            <button @click.stop="drawer = !drawer"
                class="inline-flex items-centerborder-0 py-1 px-4 focus:outline-none text-base md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </button>
        </v-main>
    </v-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

const store = useStore()
const cart = computed(() => store.state.cart)
const totalCost = computed(() =>
    cart.value.reduce((total, product) => total + product.price * product.quantity, 0)  //adds the cost of each product in the cart
)
const drawer = ref(false)

function remove(product) {
    store.commit('removeFromCart', product)
}

</script>