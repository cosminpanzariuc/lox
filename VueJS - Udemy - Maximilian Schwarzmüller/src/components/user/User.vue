<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{id}}</p>
        <button class="btn btn-danger" @click="navigateToHome"> Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                id: this.$route.params.id
            }
        },
        watch:{//beforeRouteUpdate (to, from, next)
            '$route'(to, from){
                this.id = to.params.id;
            }
        },
        methods: {
            navigateToHome(){
                this.$router.push('/');
            }
        }
    }
</script>
