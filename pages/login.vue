<template>
    <section>
        <div v-if="$route.query.message" class="alert alert-danger mb-3">
            Need login first
        </div>
        <form @submit.prevent="onSubmit"> 
            <h1>Login page</h1>
            <div class="form-group">
                <input type="text" class="form-control">
            </div>
            <button class="btn btn-primary">Login</button>
            <p>
                <nuxt-link to="/">To home page</nuxt-link>
            </p>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'empty',
    methods: {
        onSubmit(){
            this.$store.dispatch('login')  //action without filename, because index.js is root
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form{
        width: 500px;
        margin: 0 auto;
    }
</style>