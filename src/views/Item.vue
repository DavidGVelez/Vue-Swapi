<template>
    <div>

         <ul>
             <li v-for="(item, index) in data" :key='index'>
                 {{item}}
             </li>
         </ul>
    </div>
   
</template>

<script>
export default {
    props:['data']
}
</script>