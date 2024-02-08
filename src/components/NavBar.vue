<template>
  <nav class="border-b border-gray-200 relative flex flex-wrap items-center justify-between px-2 py-5 bg-blueGray-500 ">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <RouterLink :to="{ path: '/' }">
          <a class="flex title-font font-medium items-center text-gray-900 mb-1">
            <button class="bg-slate-700 ml-3 text-white font-bold p-3 rounded-full"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg></button>
            <span class="ml-3 text-xl mt-2 font-bold">STYLE HUB</span>
          </a>
        </RouterLink>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto pl-2 mt-2">
          <li class="nav-item">
            <router-link :to="{ name: 'AllProducts' }"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">All
              Products</router-link>
          </li>

          <li class="nav-item">
            <div class="relative inline-block text-left ">
              <div>
                <button type="button" @click="showDropDown()" 
                  class="inline-flex w-full justify-center gap-x-1 px-3 pt-1.5 items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Men/Women
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div v-show="show" @mouseleave.self="show = !show"
                class="ease-out transition duration-75 absolute lg:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <router-link :to="{ name: 'products', params: { category: 'mens-shirts' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Men's Shirts</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'mens-shoes' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Men's Shoes</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'mens-watches' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Men's Watches</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'womens-dresses' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Women's Dresses</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'womens-bags' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Women's Bags</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'womens-jewellery' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Women's Jewellery</router-link>
                  <router-link :to="{ name: 'products', params: { category: 'womens-watches' } }"
                    class="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Women's Watches</router-link>
                </div>
              </div>
            </div>
          </li>


          <li class="nav-item">
            <router-link :to="{ name: 'products', params: { category: 'laptops' } }"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">Laptops</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products', params: { category: 'smartphones' } }"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">Smartphones</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products', params: { category: 'fragrances' } }"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">Fragrances</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products', params: { category: 'furniture' } }"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">Furniture</router-link>
          </li>
          <li class="nav-item">
            <SideBar />
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>
  
<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import SideBar from './SideBar.vue';

export default {
  setup() {
    const showMenu = ref(false);
    const show = ref(false);
    function toggleNavbar() {
      showMenu.value = !showMenu.value;
    }
    function showDropDown() {
      show.value = !show.value;
    }
    return {
      showMenu,
      show,
      toggleNavbar,
      showDropDown
    };
  },
  components: { SideBar }
}
</script>
