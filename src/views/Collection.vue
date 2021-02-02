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
                <li>{{item.name}}</li>
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
</style>