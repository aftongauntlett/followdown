<template>
    <div class="card">
        <div class="pt-5 aboutHeader d-flex flex-wrap">Join & Login</div>
        <div class="d-flex justify-content-center">
            <b-card
                    title="Welcome"
                    tag="article"
                    style="max-width: 20rem; max-height: 25rem"
                    class="cardFont mb-2 mt-2"
            >
                <b-card-text>
                    You can both join and log in easily using your Google account.
                </b-card-text>
                <RotateButtons :dark="true" :on-click="loginWithFirebase" text="Login with Google"/>
            </b-card>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../components/Shared/RotateButtons";

    export default {
        name: "Login",
        components: {RotateButtons},
        methods: {
            loginWithFirebase() {
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

    .aboutHeader {
        font-size: 45px;
        font-family: "Montserrat", sans-serif;
        color: #51356E;
        border-bottom: 1px solid #DED3E6;
        margin: 0 auto;
        width: auto;
        margin-bottom: 30px;
    }

</style>