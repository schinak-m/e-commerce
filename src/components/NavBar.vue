<template>
  <header class="text-gray-700 body-font border-b border-gray-200">
    <div class="container mx-auto flex flex-wrap pt-3 flex-col md:flex-row items-center">
      <RouterLink :to="{ path: '/' }">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <button class="bg-slate-700 ml-3 text-white font-bold p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg></button>
          <span class="ml-3 text-xl mt-2 font-bold">STYLE HUB</span>
        </a>
      </RouterLink>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">

        <router-link :to="{ name: 'AllProducts' }" class="mr-5 hover:text-gray-400">All Products</router-link>
        <div class="relative inline-block text-left mr-3">
          <div>
            <button type="button" @mouseover="showMenu()"
              class="inline-flex w-full justify-center gap-x-1  hover:text-gray-400" id="menu-button" aria-expanded="true"
              aria-haspopup="true">
              Men/Women
              <svg class="-mr-1 mt-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div v-show="show" @mouseleave="show=!show"
            class="ease-out transition ease-in duration-75 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <router-link :to="{ name: 'products', params: { category: 'mens-shirts' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Men's Shirts</router-link>
                <router-link :to="{ name: 'products', params: { category: 'mens-shoes' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Men's Shoes</router-link>
                <router-link :to="{ name: 'products', params: { category: 'mens-watches' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Men's Watches</router-link>
                <router-link :to="{ name: 'products', params: { category: 'womens-dresses' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Women's Dresses</router-link>
                <router-link :to="{ name: 'products', params: { category: 'womens-bags' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Women's Bags</router-link>
                <router-link :to="{ name: 'products', params: { category: 'womens-jewellery' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Women's Jewellery</router-link>
                <router-link :to="{ name: 'products', params: { category: 'womens-watches' }}" class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Women's Watches</router-link>
            </div>
          </div>
        </div>

        <router-link :to="{ name: 'products', params: { category: 'laptops' } }"
          class="mr-5 hover:text-gray-400">Laptops</router-link>
        <router-link :to="{ name: 'products', params: { category: 'smartphones' } }"
          class="mr-5 hover:text-gray-400">Smartphones</router-link>
        <router-link :to="{ name: 'products', params: { category: 'fragrances' } }"
          class="mr-5 hover:text-gray-400">Fragrances</router-link>
        <router-link :to="{ name: 'products', params: { category: 'furniture' } }"
          class="mr-5 hover:text-gray-400">Furniture</router-link>
        <SideBar />
      </nav>
    </div>
  </header>

  

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import SideBar from './SideBar.vue';

const show = ref(false)

function showMenu() {
  show.value = !show.value
}

</script>
