<template>
<div>
    <h1 v-if="title">{{title}}</h1>

    <div class="collection">
        <div v-if="this.$store.state.loading" class="loading">
            Loading...
        </div>

        <div v-else class="content">
            <ul>
                <li v-for="(item, index) in this.$store.state.data" :key="index">
                    <router-link
                     :to="`${title}/${index+1}`"
                    >
                    {{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>
  </div>
</div>
</template>

<script>

export default {

    computed: {
        title() {
            return this.$route.name.toLowerCase();
        }
    },
    methods: {
        getData(){
              this.$store.dispatch('getData', {title: this.title})
        }
    },
    watch: {
        '$route' () {
           this.getData();
        }
    },
    mounted(){
        this.getData();
     },


}
</script>

<style lang="scss">
    h1{
        font-size: 2rem;
           text-transform: capitalize;
    }
    .content {
        margin: 2rem 0;

        & ul {
            
            & li {
                font-size: 1.25rem;
                margin: 2rem 0;
                text-align: left;

                & a{
                    border: 1px solid transparent;
                }

                & a:hover{
                    border-bottom: 1px solid #333;
                }
            }
        }

    }
</style>