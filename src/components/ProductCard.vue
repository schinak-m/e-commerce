<template>
    <div class="w-60 bg-white rounded-xl p-2">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
            <img :src="product.thumbnail" alt="Product"
                class="h-1/2 w-60 rounded-md duration-500 hover:scale-105 hover:shadow-xl" />
        </router-link>
        <div class="py-3 w-60">
            <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.category }}</span>
            <p class="text-lg font-semibold text-black truncate block capitalize">{{ product.title }}</p>
            <div class="flex items-center">
                <p class="text-2xl font-bold text-black cursor-auto my-3">{{ product.price }}$</p>
                <div class="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                </div>
            </div>
            <button @click="addToCart(product)"
                class="w-full cursor-pointer flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                    Add to cart
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const { product } = defineProps({
    product: {
        required: true
    }
})

const store = useStore()
const quantity = ref(1)

function addToCart(product) {
    store.commit('addToCart', { product, quantity })
}

</script>