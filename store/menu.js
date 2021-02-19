const WP_API = 'https://admin.impression.co.uk/wp-json';

export const state = ()=>({
    menu: []
})

export const mutations = {
    setMenu(state, menu){
        state.menu = menu
    }
}

export const actions = {
    async fetch({commit}){
        const menu = await this.$axios.$get(`${WP_API}/menus/v1/menus`)
        console.log(menu)
        commit('setMenu', menu)
    }
}

export const getters = {
    menu: s=>s.menu
}