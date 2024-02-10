<template>
    <div>
        <section class="overflow-hidden bg-white py-11 font-poppins ">
            <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div class="flex flex-wrap -mx-4">
                    <!-- Image -->
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="sticky top-0 z-50 overflow-hidden ">
                            <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img :src="Image" alt="" class=" w-full lg:h-96 ">
                            </div>
                            <div class="flex-wrap hidden md:flex ">
                                <div class="w-1/2 p-2 sm:w-1/4" v-for="image in product.images">
                                    <a href="#"
                                        class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300 hover:opacity-75">
                                        <img @click="changeImage(image)" :src="image" alt=""
                                            class="object-cover w-full lg:h-20">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- Product Details -->
                    <div class="w-full px-4 md:w-1/2 ">
                        <div class="lg:pl-20">
                            <div class="mb-8 ">
                                <span class="text-lg font-medium text-rose-500 dark:text-rose-600">{{ product.brand}}</span>
                                <h2 class="max-w-xl mt-2 mb-2 text-3xl font-bold dark:text-slate-800 md:text-4xl">
                                    {{ product.title }}
                                </h2>
                                <p class="mb-6">{{ product.category }}</p>
                                <div class="flex items-center mb-6">
                                    <ul class="flex mr-2">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-red-500 dark:text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-red-500 dark:text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-red-500 dark:text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-red-500 dark:text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="text-xs dark:text-gray-900 ">(2 customer reviews)</p>
                                </div>

                                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-600">
                                    {{ product.description }}
                                </p>

                                <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-900 ">
                                    <span>${{ product.price }}</span>
                                </p>

                                <p class="text-green-600 dark:text-green-600 ">{{ product.stock }} in stock</p>
                            </div>

                            <!-- Quantity -->
                            <div class="w-32 mb-8 ">
                                <label for=""
                                    class="w-full text-xl font-semibold text-gray-700 dark:text-gray-900">Quantity</label>
                                <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent border rounded-lg">
                                    <button @click="decreaseQ"
                                        class="w-20 h-full rounded-l outline-none cursor-pointer dark:hover:bg-gray-100 dark:text-slate-800 hover:text-slate-700  hover:bg-gray-400">
                                        <span class="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        class="flex items-center w-full font-semibold text-center placeholder-gray-700 bg-white outline-none dark:text-slate-800 dark:placeholder-gray-900  focus:outline-none text-md hover:text-black"
                                        :placeholder="quantity">
                                    <button @click="increaseQ"
                                        class="w-20 h-full text-gray-900  rounded-r outline-none cursor-pointer dark:hover:bg-gray-100 dark:text-slate-800  hover:text-slate-700">
                                        <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <!-- Add to Cart -->
                            <div class="flex flex-wrap items-center -mx-4 ">
                                <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <button @click="addToCart(product, quantity)"
                                        class="flex items-center justify-center w-full px-5 py-2.5 text-blue-500 border border-slate-900 rounded-md dark:text-gray-200 bg-slate-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        :class="{'bg-gray-700' : isClicked}">
                                        Add to Cart
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient';

const route = useRoute()
const store = useStore()
const product = ref({})
const quantity = ref(1)
const Image = ref('')
const isClicked = ref(false)

function addToCart(product, quantity) {
    isClicked.value = true
    setTimeout(() => {
        isClicked.value = false;
      }, 1000)
    store.commit('addToCart', { product, quantity })
}

function changeImage(img) {
    Image.value = img
}

function increaseQ() {
    quantity.value++
}

function decreaseQ() {
    if (quantity.value > 0) {
        quantity.value--
    }
}

onMounted(async () => {
    const response = await axiosClient.get(`products/${route.params.id}`)
    product.value = response.data
    Image.value = product.value.thumbnail
})

</script>
