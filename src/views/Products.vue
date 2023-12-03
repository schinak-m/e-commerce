<template>
    <v-parallax src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
        height="300">
    </v-parallax>

    <div class="text-center p-10 mt-4">
        <h1 class="font-bold text-4xl">Shop your Products</h1>
        <hr class="w-36 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
    </div>

    <section id="Projects"
        class="w-fit mx-auto px-5 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12 mt-10 mb-5">
            <ProductCard v-for="product in products" :key="product" :product="product" />
    </section>
    <Footer />

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import Footer from '../components/Footer.vue';

const products = computed(() => store.state.categories)
const route = useRoute()
const store = useStore()
const category = ref('')

const loadProducts = () => {
    category.value = route.params.category
    store.dispatch('loadCategories', category.value)
}

onMounted(loadProducts)
watch(() => route.params.category, loadProducts)
</script>
