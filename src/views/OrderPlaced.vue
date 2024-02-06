<template>
    <div className="h-full w-full p-10 lg:m-10 flex flex-col items-center justify-center">
        <svg width='100' height='100' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink' class="mb-3">
            <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
            <g transform="matrix(0.42 0 0 0.42 12 12)">
                <g style="">
                    <g transform="matrix(1 0 0 1 0 0)">
                        <path
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(200,230,201); fill-rule: nonzero; opacity: 1;"
                            transform=" translate(-24, -24)"
                            d="M 44 24 C 44 35.045 35.045 44 24 44 C 12.954999999999998 44 4 35.045 4 24 C 4 12.954999999999998 12.955 4 24 4 C 35.045 4 44 12.955 44 24 z"
                            stroke-linecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 1 0.21)">
                        <path
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(76,175,80); fill-rule: nonzero; opacity: 1;"
                            transform=" translate(-25, -24.21)"
                            d="M 34.586 14.586 L 21.016 28.172 L 15.413999999999998 22.586 L 12.585999999999999 25.413999999999998 L 21.019999999999996 33.827999999999996 L 37.41499999999999 17.413999999999994 L 34.586 14.586 z"
                            stroke-linecap="round" />
                    </g>
                </g>
            </g>
        </svg>
        <span class="text-gray-600 font-semibold text-sm">SUCCESS</span>
        <span className="pt-2 font-bold text-xl">Your Order has been placed</span>
        <p class="text-gray-800">Thank you for your order! Please check your email for your Order Details.</p>
        <br>
        <p><b>Order Number:</b> #{{ OrderNumber }}</p>
        <p><b>Order Date: </b>{{ OrderDate }}</p>
        <div class="flex items-center justify-center mt-6">
                        <router-link :to="{ name: 'AllProducts' }" class="w-full">
                            <button
                                class="w-full py-2 px-10 text-lg font-medium text-blue-500 border border-slate-900 rounded-md dark:text-gray-200 bg-slate-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                Continue shopping
                            </button></router-link>
                    </div>
    </div>
</template>


<script setup>
import { ref,onMounted } from 'vue';

const OrderNumber = ref(0)
const current = new Date()
const OrderDate = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

onMounted(() => {
     OrderNumber.value = Math.ceil(Math.random()*10000000)
})
</script>