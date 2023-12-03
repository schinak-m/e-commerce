import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import AllProducts from "../views/AllProducts.vue"
import ProductDetails from "../views/ProductDetails.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import OrderPlaced from "../views/OrderPlaced.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products/:category?",
    name: "products",
    component: Products,
  },
  {
    path: "/allproducts",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/details/:id?",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/orderPlaced",
    name: "OrderPlaced",
    component: OrderPlaced,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
