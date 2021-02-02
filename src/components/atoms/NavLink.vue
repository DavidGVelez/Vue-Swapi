<template>
     <router-link :to="this.route" >{{this.name}}</router-link>
</template>


<script>
export default {
    props: ['route', "name"]
}
</script>


<style lang="scss">
    a{
        text-decoration: none;
         color: #333;
    }
</style>