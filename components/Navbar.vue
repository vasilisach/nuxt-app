<template>
  <nav class="navbar">
    <div class="navbar-left">
      <nuxt-link class="navbar-logo" to="/">IMPRESSION</nuxt-link>
      <div class="navbar-menu" id="navbarSupportedContent">
        <ul class="menu-items">
          <li class="nav-item" v-for="item of menu" :key="item.term_id">
            <nuxt-link no-prefetch exact active-class="active" class="nav-link" :to="`/${item.slug}`">{{item.name}}</nuxt-link>
            <div class="triangle-right"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-right">
      <div class="nav-item nav-auth" v-if="!hasToken">
        <nuxt-link active-class="active" class="nav-link" to="/login">Get in touch with our team</nuxt-link>
        <div class="triangle-wrapper"><div class="triangle-right"></div></div>
      </div>
      <div class="nav-item nav-auth" v-else>
        <a @click.prevent="logout" class="nav-link" href="#">Get in touch with our team</a>
        <div class="triangle-wrapper"><div class="triangle-right"></div></div>
      </div>
      
    </div>
  </nav>
</template>

<script>
export default {
  /*async fetch({store}){
    if(store.getters['menu/menu'].length === 0){
      await store.dispatch('menu/fetch');
    }
  },*/
  async mounted(){ //server method for ssr
        this.menu = await this.$axios.$get('https://admin.impression.co.uk/wp-json/menus/v1/menus'); 
  },
  data: ()=>({
    menu: []
  }),
  computed: {
    hasToken(){
      return this.$store.getters.hasToken
    },
    /*menu(){
      console.log(this.$store.getters['menu/menu'])
      return this.$store.getters['menu/menu']
    }*/
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar-left{
  display: flex;
  align-items: center;
}
.navbar-right{
  background: #FAB61F;
  position: absolute;
  right: 0;
  padding: 20px;
}

.navbar-logo{
  font-weight: 700;
  font-size: 25px;
  margin-right: 30px;
}

.menu-items{
  display: flex;
  align-items: center;
}
.navbar{
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid rgba(88, 86, 109, 0.5);
}
.nav-item{
  margin: 10px;
  font-size: 20px;
  transition: all 0.5s;
}
.triangle-wrapper{
  width: 5px;
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid white;
  border-left: 5px solid transparent;
  transition: all 0.5s;
  transform-origin: top right;
}
.navbar-right.nav-item{
  margin: 0;
}
.nav-item{
  display: flex;
  align-items: baseline;
}
.navbar-right:hover{
  background: cornflowerblue;
  transition: all 0.5s;
}
.navbar-right:hover .triangle-right{
  transition: all 0.5s;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: push-down ease 0.5s;
}
.menu-items .nav-item .triangle-right{
  border-right: 5px solid cornflowerblue;
}
.menu-items .nav-item:hover .triangle-right{
  transition: all 0.5s;
  transform: rotate(45deg);
}
@keyframes push-down {
  0%{
    right: unset;
    bottom: unset;
  }
  30%{
    right: 10px;
    bottom: 10px;
  }
  60%{
    right: 5px;
    bottom: 5px;
  }
  100%{
    right: 0;
    bottom: 0;
  }
}
</style>