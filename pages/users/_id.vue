<template>
    <section>
        <h1>{{user.name}}</h1>
        <hr>
        <h3>{{user.email}}</h3>
    </section>
</template>

<script>
export default {
    /*Валідація вхідних параметрів*/
    validate({params}){
        return /^\d+$/.test(params.id);
    },
    async asyncData({$axios, params}){ //server method for ssr
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`); 
        return {user}
    },
}
</script>