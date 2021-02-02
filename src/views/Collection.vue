<template>
<div>
    <h1 v-if="title">{{title}}</h1>

    <div class="collection">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-else class="content">
            <ul>
                <li v-for="(item, index) in collection" :key="index">
                    <router-link
                     :to="`${title}/${index+1}`"
                    >
                    {{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>
  </div>
</div>
</template>

<script>

export default {
    data(){
        return {
            collection: [],
            loading: false,
            error: null,
        }
    },
    computed: {
        title() {
            return this.$route.name.toLowerCase();
        }
    },
    watch: {
        '$route' () {
            this.getData()
        }
    },
    methods:{
        async getData(){

            this.loading = true
            try {
                const res =  await this.$api.getCollection(this.title)
                this.collection = res.results
            } catch (error) {
                console.log(error)
            }
             this.loading = false
           
           
           
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