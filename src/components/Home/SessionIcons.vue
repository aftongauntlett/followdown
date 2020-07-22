<template>
    <div class="container d-flex flex-column justify-content-center py-5">
        <div class="d-flex my-auto flex-wrap flex-md-nowrap">
            <RotateButtons
                    v-for="(info) in cardData"
                   :text="info.text"
                    :dark="true"
                    class="m-md-3 mx-auto my-3"
                    :on-click="() => {loginOrNavigate(info.name, info.params)}"
            >
            </RotateButtons>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "SessionIcons",
        components: {RotateButtons},
        data() {
            return {
                cardData: [
                    {
                        text: 'Create a Session',
                        name: "Create Session"
                    },
                    {
                        text: 'Join a Session',
                        name: "Sessions List",
                        params: {sessionType: 'play'}
                    },
                    {
                        text: 'Host a Server',
                        name: "Server"
                    },
                    {
                        text: 'Personalized Website',
                        name: "Website"
                    },
                ]
            }
        },
        methods: {
            loginOrNavigate(dest, params){
                if (firebase.auth().currentUser) {
                    this.$router.push({name: dest, params})
                } else {
                    this.$router.push({
                        name: "Login"
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>