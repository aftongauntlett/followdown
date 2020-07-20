<template>
    <div class="d-flex justify-content-center">
        <b-card
                title="Welcome"
                img-src="https://i.pinimg.com/originals/83/01/12/830112e44ab0691d3a2de8e1bd98443b.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; max-height: 25rem"
                class="cardFont mb-2 mt-2"
        >
            <b-card-text>
                You can both join and log in easily using your Google account.
            </b-card-text>
            <RotateButtons :dark="true" :on-click="loginWithFirebase" text="Login with Google" />
        </b-card>
    </div>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../components/Shared/RotateButtons";
    export default {
        name: "Login",
        components: {RotateButtons},
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
.cardFont {
    font-family: "Montserrat", sans-serif;
    border: none;
}
    .card-body {
        padding: unset;
    }
</style>