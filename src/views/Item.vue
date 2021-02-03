<template>
    <div>
        <div v-if="this.$store.state.loading" class="loading">
            Loading...
        </div>
         <ul>
             <li v-for="(key, value, index) in this.$store.state.data[this.id]" :key='index'>
                 <span>{{value}}: {{key}}</span>
             </li>
         </ul>
    </div>
   
</template>

<script>
export default {
    
computed: {
    id() {
        return this.$route.params.id - 1
    }
}

}
</script>