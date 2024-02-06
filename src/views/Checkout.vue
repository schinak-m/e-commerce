<template>
    <div class="container mx-auto p-5 bg-slate-100">
        <div class="flex lg:flex-row flex-col shadow-md my-7 lg:mx-15">
            <div class="lg:w-2/4 w-full bg-white px-10 py-10">
                <div class="border-b pb-8">
                    <h1 class="font-semibold text-2xl">Order Summary</h1>
                    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
                </div>

                <div class="lg:flex md:flex hidden mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase md:w-2/5 lg:w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase md:w-1/5 w-1/5">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase md:w-1/5 w-1/5">Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase md:w-1/5 w-1/5">Total</h3>
                </div>

                <!-- Items -->
                <div v-for="product in cart" class="flex lg:flex-row md:flex-row flex-col items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex text-center lg:text-left lg:flex-row md:flex-row flex-col w-full md:w-2/5 lg:w-2/5 items-center">
                        <div class="lg:w-24 md:w-28">
                            <img class="lg:h-24 md:h-24" :src="product.thumbnail" alt="">
                        </div>
                        <div class="flex flex-col justify-between lg:ml-4 md:ml-2 flex-grow my-3 py-3">
                            <span class="font-bold lg:text-lg md:text-sm text-xl">{{ product.title }}</span>
                            <span class="text-red-500 md:text-xs lg:text-xs text-sm">{{ product.brand }}</span>
                            <a @click="remove(product)"
                                class="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                        </div>
                    </div>
                    <div class="flex lg:justify-center justify-center items-center w-full md:w-1/5 lg:w-1/5">
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
                    <div></div>
                    <span class="lg:hidden md:hidden w-full py-2 text-gray-700 text-center text-xl">Price</span>
                    <span class="text-center md:text-center w-full md:w-1/5 lg:w-1/5 font-semibold lg:text-sm md:text-sm text-lg">${{ product.price }}</span>
                    <span class="lg:hidden md:hidden w-full py-2 text-gray-700 text-center text-xl">Total</span>
                    <span class="text-center md:text-center w-full md:w-1/5 lg:w-1/5 font-semibold lg:text-sm md:text-sm text-lg">${{ product.price * product.quantity }}</span>
                </div>

                <!-- back -->
                <router-link :to="{ name: 'Cart' }" class="flex font-semibold text-indigo-600 text-sm mt-10">

                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    back
                </router-link>
            </div>

            <!-- Payment Details -->
            <div id="summary" class="lg:w-2/4 w-full px-8 py-10 bg-gray-100">
                <p class="text-xl font-medium">Payment Details</p>
                <p class="text-gray-400">Complete your order by providing your payment details.</p>
                <form @submit.prevent="submit">
                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                    <div class="relative">
                        <input v-model="email" type="text" id="email" name="email"
                            class="w-full rounded-md bg-white border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@gmail.com" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                    </div>
                    <p v-if="emailError" class="text-red mt-2 text-sm">{{ emailError }}</p>

                    <!-- Card Holder -->
                    <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                    <div class="relative">
                        <input v-model="cardHolder" type="text" id="card-holder" name="card-holder"
                            class="w-full rounded-md bg-white border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your full name here" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                    <p v-if="cardHolderError" class="text-red mt-2 text-sm">{{ cardHolderError }}</p>

                    <!-- Card Details -->
                    <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                    <div class="flex">
                        <div class="relative w-7/12 flex-shrink-0">
                            <input v-model="cardNo" type="text" id="card-no" name="card-no"
                                class="w-full rounded-md bg-white border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="xxxx-xxxx-xxxx-xxxx" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path
                                        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                            </div>
                        </div>
                        <input v-model="cardExDate" type="text" name="credit-expiry"
                            class="w-full rounded-md bg-white border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="MM/YY" />
                        <input v-model="cvc" type="number" name="credit-cvc"
                            class="w-1/6 flex-shrink-0 rounded-md bg-white border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="CVC" />
                    </div>
                    <p v-if="cardDetailsError" class="text-red mt-2 text-sm">{{ cardDetailsError }}</p>

                    <!-- Billing Address -->
                    <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                    <div class="flex flex-col sm:flex-row">
                        <div class="relative flex-shrink-0 sm:w-7/12">
                            <input v-model="address" type="text" id="billing-address" name="billing-address"
                                class="w-full rounded-md bg-white border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Street Address" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <img class="h-4 w-4 object-contain"
                                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                            </div>
                        </div>
                        <input v-model="state" type="text" name="billing-state"
                            class="w-full rounded-md bg-white border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="State">
                            
                        <input v-model="zip" type="text" name="billing-zip"
                            class="flex-shrink-0 rounded-md bg-white border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="ZIP" />
                    </div>
                    <p v-if="billingaddressError" class="text-red mt-2 text-sm">{{ billingaddressError }}</p>

                    <!-- Total -->
                    <div class="mt-6 border-t border-b py-2">
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Subtotal</p>
                            <p class="font-semibold text-gray-900">${{ totalCost }}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Shipping</p>
                            <p class="font-semibold text-gray-900">${{ shippingCost }}</p>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Total</p>
                        <p class="text-2xl font-semibold text-gray-900">${{ totalCostWithShipping }}</p>
                    </div>

                    
                        <button type="submit"
                            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                            Place Order
                        </button>
                    
                </form>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import router from '../router';


const store = useStore()
const cart = computed(() => store.state.cart)
const totalCost = computed(() => cart.value.reduce((total, product) => total + product.price * product.quantity, 0))
const shippingCost = computed(() => cart.value.length > 0 ? 10.00 : 0)
const totalCostWithShipping = computed(() => totalCost.value + shippingCost.value)

const email = ref('')
const cardHolder = ref('')
const cardExDate = ref('')
const cardNo = ref('')
const cvc = ref('')
const address = ref('')
const state = ref('')
const zip = ref('')

const emailError = ref('')
const cardHolderError = ref('')
const cardDetailsError = ref('')
const billingaddressError = ref('')

//Validation 
const submit = () => {
    emailError.value = ''
    cardHolderError.value = ''
    cardDetailsError.value = ''
    billingaddressError.value = ''

    if(!email.value){
        emailError.value = 'Email is required'
    }else if(!/\S+@\S+\.\S+/.test(email.value)) { //non whitespace char + @ + non whitespace char + . + non whitespace char
        emailError.value = 'Email is invalid'
    }

    if(!cardHolder.value){
        cardHolderError.value = 'Card Holder Name is required'
    }

    if(!cardNo.value  || !cardExDate.value || !cardExDate.value){
        cardDetailsError.value = 'Card Details are required'
    }

    if(!address.value || !state.value || !zip.value){
        billingaddressError.value = 'Billing Address Details are required'
    }

    if(!emailError.value && !cardHolderError.value && !cardDetailsError.value && !billingaddressError.value){ //If there is no error, submit
        router.push('/orderPlaced')
        store.commit('clearCart')
    }
}

function decreaseQuantity(product) {
    if (product.quantity > 0) {
        product.quantity--
    }
}

function remove(product) {
    store.commit('removeFromCart', product)
}


</script>