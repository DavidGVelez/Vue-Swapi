<template>
<div>
    <h1 v-if="pageTitle">{{pageTitle}}</h1>

    <div class="collection">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="collection" class="content">
            <ul v-for="item in collection" :key="item.id">
                <li v-if="title == 'People' ">
                    <router-link
                    :to="{name: 'Person',params: {id : item.id}}"
                    >
                    {{item.name}}
                    </router-link>
                </li>
                <li v-else-if="title == 'Planets' ">
                    <router-link
                    :to="{name: 'Planet',params: {id : item.id}}"
                    >
                    {{item.name}}
                    </router-link>
                </li>
                <li v-if="title == 'Starships' ">
                    <router-link
                    :to="{name: 'Starship',params: {id : item.id}}"
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
    props: ['title', 'data'],
    data(){
        return {
            collection: null,
            loading: false,
            error: null,
            pageTitle: null,
        }
    },
    watch:{
        '$route' (){
            this.pageTitle = this.title;
            this.collection = this.data;
        }
    },
    beforeMount(){
        this.collection = this.data,
        this.pageTitle = this.title
    } 
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