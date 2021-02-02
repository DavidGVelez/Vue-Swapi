<template>
    <nav>
        <ul>
            <li  v-for="(link, index) in routes" :key="index">
                <nav-link
                    v-bind:route="link.route"
                    v-bind:name="link.name"
                >
                </nav-link>
            </li>
        </ul>
    </nav>
</template>



<script>
import NavLink from '../atoms/NavLink.vue'
export default {
  components: { NavLink },
    data() {
        return{
            routes: [
                {name: 'Home', route: "/"},
                {name: 'People', route: "/people"},
                {name: 'Starships', route: "/starships"},
                {name: 'Planets', route: "/planets"},

            ]
        }
    }
}
</script>

<style lang="scss">
    nav{
        padding: 2rem;

        & ul {
            display: flex;
            flex-direction: row;
            & li{
                flex-grow: 1;
            }
        }
        .router-link-exact-active {
            color: #42b983;
            border-bottom: 1px solid #42b983;
        }
    }
</style>