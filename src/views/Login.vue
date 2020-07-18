<template>
    <div>
        <b-button @click="login">Login</b-button>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "Login",
        methods: {
            login(){
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
            }
        }
    }
</script>

<style scoped>

</style>