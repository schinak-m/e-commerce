import axiosClient from '../axiosClient'

export function loadProducts({ commit }) {
    axiosClient.get('products?limit=0')
      .then(({ data }) => {
        commit('setProducts', data.products)
      })
}

export function loadCategories({ commit }, category) {
    axiosClient.get(`products/category/${category}`)
      .then(({ data }) => {
        commit('setCategories', data.products)
      })
}