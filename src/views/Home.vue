<template>
    <!-- Hero Section -->
    <v-parallax src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
        height="500">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h3 font-bold">
                Choose from our best Products
            </h1>
            <div class="flex items-center justify-center mt-6 mb-4">
                <router-link :to="{ name: 'AllProducts' }" class="w-full">
                    <button
                        class="hover:animate-bounce w-full py-2 px-10 text-lg font-medium text-blue-500 border border-slate-900 rounded-sm dark:text-gray-200 bg-slate-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Shop Now
                    </button>
                </router-link>
            </div>
        </div>
    </v-parallax>

    <!-- Services and Features -->
    <div class="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32 mb-10">
        <div class="text-center">
            <div
                class="block rounded-lg bg-[hsla(0,0%,91%,0.50)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,91%,0.70)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
                <div class="py-2 lg:py-10 mx-auto max-w-screen-xl px-4">
                    <div
                        class="flex flex-row justify-center gap-8 text-gray-500 sm:gap-12 md:grid-cols-1 lg:grid-cols-3 dark:text-gray-400">
                        <div class="basis-1/3">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <svg width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
                                        xmlns:xlink='http://www.w3.org/1999/xlink'>
                                        <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
                                        <g transform="matrix(0.4 0 0 0.4 12 12)">
                                            <path
                                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(51, 50, 50); fill-rule: nonzero; opacity: 1;"
                                                transform=" translate(-25, -26.5)"
                                                d="M 2.800781 8 C 1.265625 8 0 9.265625 0 10.800781 L 0 37 C 0 38.644531 1.355469 40 3 40 L 7.09375 40 C 7.570313 42.828125 10.039063 45 13 45 C 15.960938 45 18.429688 42.828125 18.90625 40 L 34.09375 40 C 34.570313 42.828125 37.039063 45 40 45 C 42.960938 45 45.429688 42.828125 45.90625 40 L 47 40 C 47.832031 40 48.550781 39.613281 49.082031 39.082031 C 49.613281 38.550781 50 37.832031 50 37 L 50 27.402344 C 50 26.277344 49.582031 25.253906 49.199219 24.46875 C 48.8125 23.6875 48.421875 23.125 48.421875 23.125 L 48.410156 23.113281 L 44.292969 17.589844 L 44.28125 17.578125 C 43.394531 16.46875 41.972656 15 40 15 L 32 15 C 31.640625 15 31.308594 15.082031 31 15.207031 L 31 10.902344 C 31 9.300781 29.699219 8 28.097656 8 Z M 2.800781 10 L 28.097656 10 C 28.5 10 29 10.5 29 10.902344 L 29 38 L 18.90625 38 C 18.429688 35.171875 15.960938 33 13 33 C 10.039063 33 7.570313 35.171875 7.09375 38 L 3 38 C 2.445313 38 2 37.554688 2 37 L 2 10.800781 C 2 10.335938 2.335938 10 2.800781 10 Z M 15 12 C 9.5 12 5 16.5 5 22 C 5 27.5 9.5 32 15 32 C 20.5 32 25 27.5 25 22 C 25 16.5 20.5 12 15 12 Z M 15 14 C 19.398438 14 23 17.601563 23 22 C 23 26.398438 19.398438 30 15 30 C 10.601563 30 7 26.398438 7 22 C 7 17.601563 10.601563 14 15 14 Z M 14 16 L 14 21.5 L 10.402344 24.199219 L 11.597656 25.800781 L 16 22.5 L 16 16 Z M 32 17 L 36 17 L 36 26 C 36 26.832031 36.386719 27.550781 36.917969 28.082031 C 37.449219 28.613281 38.167969 29 39 29 L 48 29 L 48 37 C 48 37.167969 47.886719 37.449219 47.667969 37.667969 C 47.449219 37.886719 47.167969 38 47 38 L 45.90625 38 C 45.429688 35.171875 42.960938 33 40 33 C 37.039063 33 34.570313 35.171875 34.09375 38 L 31 38 L 31 18 C 31 17.832031 31.113281 17.550781 31.332031 17.332031 C 31.550781 17.113281 31.832031 17 32 17 Z M 38 17 L 40 17 C 40.828125 17 42.003906 17.933594 42.71875 18.824219 L 46.78125 24.273438 C 46.78125 24.273438 47.085938 24.710938 47.402344 25.355469 C 47.65625 25.871094 47.800781 26.472656 47.882813 27 L 39 27 C 38.832031 27 38.550781 26.886719 38.332031 26.667969 C 38.113281 26.449219 38 26.167969 38 26 Z M 13 35 C 15.222656 35 17 36.777344 17 39 C 17 41.222656 15.222656 43 13 43 C 10.777344 43 9 41.222656 9 39 C 9 36.777344 10.777344 35 13 35 Z M 40 35 C 42.222656 35 44 36.777344 44 39 C 44 41.222656 42.222656 43 40 43 C 37.777344 43 36 41.222656 36 39 C 36 36.777344 37.777344 35 40 35 Z"
                                                stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 class="font-bold text-gray-600 my-2">Fast Shipping</h2>
                                <p class="text-gray-500">We provide a fast shipping service that makes sure, you don't have
                                    to wait too long for your order!</p>
                            </div>
                        </div>
                        <div class="basis-1/3">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <svg width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
                                        xmlns:xlink='http://www.w3.org/1999/xlink'>
                                        <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
                                        <g transform="matrix(0.4 0 0 0.4 12 12)">
                                            <path
                                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(51, 50, 50); fill-rule: nonzero; opacity: 1;"
                                                transform=" translate(-25.01, -25.49)"
                                                d="M 15.84375 6 C 15.625 6.039063 15.429688 6.148438 15.28125 6.3125 L 0.28125 22.3125 C -0.0742188 22.6875 -0.0859375 23.265625 0.25 23.65625 L 7.25 31.65625 C 7.429688 31.871094 7.691406 31.996094 7.96875 32.007813 C 8.25 32.019531 8.519531 31.914063 8.71875 31.71875 L 11 29.4375 L 11 44 C 11 44.550781 11.449219 45 12 45 L 38 45 C 38.550781 45 39 44.550781 39 44 L 39 29.4375 L 40.28125 30.71875 C 40.46875 30.914063 40.730469 31.023438 41 31.023438 C 41.269531 31.023438 41.53125 30.914063 41.71875 30.71875 L 49.71875 22.71875 C 49.914063 22.53125 50.023438 22.269531 50.023438 22 C 50.023438 21.730469 49.914063 21.46875 49.71875 21.28125 L 34.71875 6.28125 C 34.414063 5.976563 33.949219 5.902344 33.5625 6.09375 C 33.5625 6.09375 29.523438 8 25 8 C 20.476563 8 16.4375 6.09375 16.4375 6.09375 C 16.253906 6.003906 16.046875 5.96875 15.84375 6 Z M 16.28125 8.15625 C 17.195313 8.5625 20.566406 10 25 10 C 29.433594 10 32.804688 8.5625 33.71875 8.15625 L 47.5625 22 L 41 28.5625 L 38.71875 26.28125 C 38.433594 25.984375 37.992188 25.894531 37.613281 26.054688 C 37.234375 26.210938 36.992188 26.589844 37 27 L 37 43 L 13 43 L 13 27 C 13.007813 26.589844 12.765625 26.210938 12.386719 26.054688 C 12.007813 25.894531 11.566406 25.984375 11.28125 26.28125 L 8.03125 29.53125 L 2.34375 23.03125 Z"
                                                stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 class="font-bold text-gray-600 my-2">Exchange</h2>
                                <p class="text-gray-500">Don't like your product? No problem! You can Exchange it with
                                    something else or return it.</p>
                            </div>
                        </div>
                        <div class="basis-1/3 ">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <svg width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
                                        xmlns:xlink='http://www.w3.org/1999/xlink'>
                                        <rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />
                                        <g transform="matrix(0.42 0 0 0.42 12 12)">
                                            <path
                                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(51, 50, 50); fill-rule: nonzero; opacity: 1;"
                                                transform=" translate(-25, -25)"
                                                d="M 21.4375 1.0058594 C 20.081703 1.0463506 18.771739 1.7524791 18.025391 2.9863281 L 17.761719 3.4238281 C 17.385173 4.0455037 16.721685 4.4283987 15.996094 4.4433594 L 15.994141 4.4433594 L 15.482422 4.4550781 C 13.286577 4.5008101 11.497809 6.2882845 11.453125 8.484375 L 11.441406 8.9960938 C 11.426446 9.7216978 11.042385 10.386559 10.421875 10.761719 L 9.984375 11.027344 C 8.1054479 12.164721 7.4493952 14.60833 8.5078125 16.533203 L 8.5097656 16.533203 L 8.7558594 16.982422 C 9.1060077 17.618128 9.1060077 18.385778 8.7558594 19.021484 L 8.5097656 19.46875 C 7.4515168 21.393317 8.1061771 23.837315 9.9863281 24.974609 L 10.423828 25.238281 C 11.045504 25.614827 11.428399 26.278315 11.443359 27.003906 L 11.443359 27.005859 L 11.455078 27.517578 C 11.49207 29.293819 12.67637 30.78643 14.287109 31.322266 L 9.0917969 42.580078 C 8.948531594961068 42.889838462301555 8.973117349330346 43.25127130604251 9.157010534629624 43.53877745907868 C 9.340903719928901 43.82628361211484 9.658713516134785 44.00016602435989 10 44 L 16.519531 44 L 20.21875 48.625 C 20.437604384718075 48.89842848678079 20.78354453001232 49.03745155271537 21.130746531588144 48.99150430910597 C 21.477948533163968 48.94555706549658 21.775818343616503 48.721334914474376 21.916016 48.400391 L 25.03125 41.28125 L 28.146484 48.400391 C 28.286681656383497 48.721334914474376 28.584551466836032 48.94555706549658 28.931753468411856 48.99150430910597 C 29.27895546998768 49.03745155271537 29.624895615281925 48.89842848678079 29.84375 48.625 L 33.542969 44 L 40.0625 44 C 40.403786466109885 44.00016599021833 40.72159623092673 43.82628356417782 40.90548939228067 43.53877741692219 C 41.089382553634614 43.251271269666546 41.113968297562025 42.88983844617897 40.970703 42.580078 L 35.767578 31.304688 C 37.351214 30.753718 38.510287 29.274384 38.546875 27.517578 L 38.546875 27.515625 L 38.558594 27.005859 L 38.558594 27.003906 C 38.573554 26.278302 38.957615 25.613441 39.578125 25.238281 L 40.017578 24.972656 C 41.896553 23.835278 42.550604 21.393623 41.492188 19.46875 L 41.490234 19.466797 L 41.240234 19.015625 C 40.892213 18.380675 40.892703 17.614886 41.242188 16.980469 L 41.490234 16.533203 L 41.490234 16.53125 C 42.548024 14.607519 41.893895 12.165278 40.015625 11.027344 L 40.013672 11.025391 L 39.576172 10.761719 C 38.954541 10.385361 38.571601 9.7216849 38.556641 8.9960938 L 38.556641 8.9941406 L 38.544922 8.484375 L 38.544922 8.4824219 C 38.499191 6.2865703 36.711715 4.4978091 34.515625 4.453125 L 34.003906 4.4414062 C 33.278302 4.4264453 32.613441 4.0423845 32.238281 3.421875 L 31.972656 2.984375 C 30.835362 1.104224 28.391364 0.44956368 26.466797 1.5078125 L 26.466797 1.5097656 L 26.017578 1.7558594 C 25.381872 2.1060077 24.614222 2.1060077 23.978516 1.7558594 L 23.53125 1.5097656 C 23.050108 1.2452034 22.537032 1.0874427 22.019531 1.0292969 C 21.825469 1.0074922 21.631185 1.0000749 21.4375 1.0058594 z M 21.386719 3 C 21.782233 2.9711393 22.192072 3.0548121 22.568359 3.2617188 L 23.013672 3.5078125 C 24.247966 4.1876642 25.750081 4.1876642 26.984375 3.5078125 L 27.431641 3.2597656 L 27.431641 3.2617188 C 28.435074 2.7099676 29.669013 3.0396824 30.261719 4.0195312 L 30.527344 4.4570312 C 31.255989 5.6612476 32.553769 6.411729 33.960938 6.4414062 L 34.474609 6.453125 C 35.619859 6.476427 36.523573 7.3781883 36.546875 8.5234375 L 36.546875 8.5253906 L 36.556641 9.0371094 C 36.585681 10.445518 37.336691 11.743202 38.541016 12.472656 L 38.978516 12.738281 C 39.957765 13.330624 40.288615 14.563305 39.738281 15.566406 L 39.490234 16.015625 C 38.810383 17.249919 38.810383 18.750081 39.490234 19.984375 L 39.492188 19.986328 L 39.492188 19.988281 L 39.740234 20.431641 C 40.291817 21.434767 39.959494 22.669097 38.980469 23.261719 L 38.542969 23.527344 C 37.337478 24.256184 36.587633 25.554495 36.558594 26.962891 L 36.548828 27.474609 L 36.548828 27.476562 C 36.525528 28.621813 35.621812 29.523573 34.476562 29.546875 L 33.962891 29.558594 C 32.55523 29.588284 31.258416 30.337244 30.529297 31.541016 L 30.529297 31.542969 L 30.263672 31.980469 C 29.670966 32.960318 28.437027 33.290032 27.433594 32.738281 L 27.433594 32.740234 L 26.986328 32.492188 C 25.752034 31.812335 24.249919 31.812335 23.015625 32.492188 L 22.568359 32.740234 L 22.568359 32.738281 C 21.565233 33.289864 20.330903 32.959494 19.738281 31.980469 L 19.472656 31.542969 C 18.744011 30.338752 17.446232 29.588271 16.039062 29.558594 L 16.037109 29.558594 L 15.525391 29.546875 C 14.380141 29.523575 13.476427 28.621813 13.453125 27.476562 L 13.453125 27.474609 L 13.443359 26.962891 C 13.414319 25.554482 12.663309 24.256798 11.458984 23.527344 L 11.021484 23.261719 C 10.04167 22.668878 9.7099674 21.435074 10.261719 20.431641 L 10.507812 19.986328 L 10.507812 19.984375 C 11.186723 18.750406 11.187351 17.249349 10.507812 16.015625 L 10.259766 15.568359 L 10.261719 15.568359 C 9.7101357 14.565233 10.040506 13.330903 11.019531 12.738281 L 11.457031 12.472656 C 12.661248 11.744011 13.411729 10.446231 13.441406 9.0390625 L 13.441406 9.0371094 L 13.453125 8.5253906 C 13.476425 7.3801414 14.378187 6.4764275 15.523438 6.453125 L 15.525391 6.453125 L 16.037109 6.4433594 C 17.445518 6.4143204 18.743202 5.6633088 19.472656 4.4589844 L 19.738281 4.0214844 C 20.034634 3.5315599 20.489931 3.2024706 20.998047 3.0664062 C 21.125076 3.0323902 21.254881 3.0096202 21.386719 3 z M 33.701172 31.603516 L 38.498047 42 L 33.0625 42 C 32.75863734302571 41.99982466446746 32.47117553535125 42.13780633215121 32.28125 42.375 L 29.314453 46.082031 L 26.123047 38.783203 L 27.806641 34.935547 C 29.413838 35.18657 31.089508 34.478857 31.974609 33.015625 L 32.240234 32.578125 C 32.562592 32.045913 33.099287 31.704691 33.701172 31.603516 z M 16.357422 31.611328 C 16.936501 31.724996 17.45057 32.063489 17.761719 32.578125 L 18.027344 33.015625 C 19.164722 34.8946 21.60833 35.550604 23.533203 34.492188 L 23.533203 34.490234 L 23.982422 34.244141 C 24.592626 33.908038 25.321448 33.903754 25.941406 34.212891 L 20.748047 46.082031 L 17.78125 42.375 C 17.591324464648753 42.13780633215121 17.303862656974285 41.99982466446746 17 42 L 11.564453 42 L 16.357422 31.611328 z"
                                                stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 class="font-bold text-gray-600 my-2">Warranty</h2>
                                <p class="text-gray-500">Something is wrong with your Order? Let us know and we will replace
                                    it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Categories -->
    <section>
        <div class="flex justify-center w-5/6 mx-auto">
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex xl:w-1/2 md:w-full flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <figure
                                class="w-full h-full relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/phone.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'smartphones' } }">
                                    <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        Smartphones
                                    </button>
                                </router-link></figcaption>
                            </figure>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <figure
                                class="w-full h-full relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/laptop.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'laptops' } }">
                                        <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Laptops
                                        </button>
                                    </router-link>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <figure
                                class="w-full h-full object-fill relative max-w-2xl transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/watch.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'mens-watches' } }">
                                        <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Men's Watches
                                        </button>
                                    </router-link>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="flex xl:w-1/2 md:w-full flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <figure
                                class="w-full h-full object-fill relative max-w-2xl transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/bag.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'womens-bags' } }">
                                        <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Women's Bags
                                        </button>
                                    </router-link>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <figure
                                class="w-full h-full relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/jewelry.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'womens-jewellery' } }">
                                        <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Jewellery
                                        </button>
                                    </router-link>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <figure
                                class="w-full h-full relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
                                <a href="#">
                                    <img class="rounded-lg object-cover w-full h-full"
                                        src="../assets/shoes.jpg"
                                        alt="image description">
                                </a>
                                <figcaption class="absolute px-4 text-lg text-white bottom-6 ">
                                    <router-link :to="{name: 'products', params: { category: 'womens-shoes' } }">
                                        <button type="button" class="text-gray-900 bg-gray-100 border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Shoes
                                        </button>
                                    </router-link>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>
