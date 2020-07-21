<template>
    <div class="d-flex flex-column">
        <RotateButtons v-if="!user" :dark="true" :navTo="{ name: 'Login' }" text="Log In or Join" class="mb-5"></RotateButtons>
        <RotateButtons  v-if="!user" :dark="true" :navTo="{ name: 'About' }" text="About Us"></RotateButtons>
        <RotateButtons  v-if="user" :dark="true" :navTo="{ name: 'Profile' }" text="Profile"></RotateButtons>
    </div>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        components: {RotateButtons},
        data(){
            return {
                user: null
            }
        },
        mounted(){
            this.user = firebase.auth().currentUser;
            firebase.auth().onAuthStateChanged(user => {
                this.user = user;
            })
        },

        methods: {
            logout(){
                firebase.auth().signOut();
            }
        }
    };


</script>

<style lang="scss" scoped>

</style>