<template>
    <div>

        <b-button @click="loginWithFirebase">Login</b-button>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "Login",
        methods: {
            loginWithFirebase(){
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
            }
        }
    }
</script>

<style scoped>

</style>