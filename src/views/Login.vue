<template>
    <div>

        <b-button @click="loginWithFirebase">Login with Google</b-button>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "Login",
        methods: {
            loginWithFirebase(){
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(user => {
                    this.$router.push({name: 'Home'})
                })
            }
        }
    }
</script>

<style scoped>

</style>