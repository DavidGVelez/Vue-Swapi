<template>
    <div>
        <div v-if="loading" class="loading">
            Loading...
        </div>
         <ul>
             <li v-for="(key, value, index) in item" :key='index'>
                 <span>{{value}}: {{key}}</span>
             </li>
         </ul>
    </div>
   
</template>

<script>
export default {
    
    data() {
        return {
            item: [],
            loading: false,
        }
    },
    methods: {
       async getData(){
            try {
                this.loading = true;
                const res =  await this.$api.getItem(this.$route.path.replace('/', ""))
                this.item = res
                this.loading = false;
            } catch (error) {
                console.log(error)
            }
        },
    },
    mounted() {
        this.getData()
    }
}
</script>