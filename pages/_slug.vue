<template>
    <section>
        <h1>{{pageData.name}}</h1>
        <nuxt-link class="home-link" to="/">GO BACK</nuxt-link>
    </section>
</template>

<script>
export default {
    async asyncData({$axios, params}){
        const pageData = await $axios.$get(`https://admin.impression.co.uk/wp-json/menus/v1/menus/${params.slug}`); 
        return {pageData}
    },
}
</script>

<style scoped>
    .home-link{
        color: wheat;
        margin: 40px auto;
    }
</style>