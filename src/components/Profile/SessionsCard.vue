<template>
<!--    <div>-->
<!--        <h2>What are you interested in?</h2>-->
<!--        <div class="sessionCard">-->
<!--            <RotateButtons-->
<!--                    class="sessionButton m-5"-->
<!--                    v-for="session in sessions"-->
<!--                    :key="session.text"-->
<!--                    :text="session.text"-->
<!--                    :style="`background-image:url(${session.img})`"-->
<!--                    :pressed="userSessions.includes(session.text)"-->
<!--                    @click="() => {toggleSession(session.text)}"-->
<!--            > {{ session.text }}</RotateButtons>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "SessionsCard",
        components: {RotateButtons},
        data () {
            return {
                sessions: [
                    {text: "Create a Session", img: ""},
                    {text: "Join a Session"},
                    {text: "Host a Server"},
                    {text: "Customized Website"}
                ],
                userSessions: []
            }
        },
        mounted() {
            firebase.auth().onAuthStateChanged(user => {
                firebase.database().ref(`users/${user.uid}/sessions`).on("value", snapshot => {
                    if(snapshot.val()) {
                        this.userSessions = snapshot.val()
                    }
                })
            })
        },
        methods: {
            toggleSession(session) {
                if (this.userSessions.includes(session)){
                    this.userSessions.splice(this.userSessions.indexOf(session), 1)
                } else {
                    this.userSessions.push(session)
                }
                firebase.database().ref(`users/${
                    firebase.auth().currentUser.uid
                }`).update({
                    sessions: this.userSessions
                })
            }
        }
    }
</script>

<style scoped>
.sessionButton {
    background-color: unset!important;
    color: #51356E;
    font-family: "Montserrat", sans-serif;
}

    h2 {
        font-family: "Montserrat", sans-serif;
        padding-bottom: 20px;
        padding-top: 20px;
    }

</style>