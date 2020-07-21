<template>
    <div>
        <h2>What are you interested in?</h2>
        <div class="sessionCard">
            <b-btn
                    class="sessionButton m-5"
                    v-for="session in sessions"
                    :key="session.text"
                    :style="`background-image:url(${session.img})`"
                    :pressed="userSessions.includes(session.text)"
                    @click="() => {toggleSession(session.text)}"
            > {{ session.text }}</b-btn>
        </div>

    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "SessionsCard",
        data () {
            return {
                sessions: [
                    {text: "Server Hosting", img: ""},
                    {text: "Custom Website"},
                    {text: "D&D Finder"},
                    {text: "Game Finder"}
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
    padding: 50px !important;
    background-color: unset!important;
    color: #51356E;
    font-family: "Montserrat", sans-serif;
}

    h2 {
        font-family: "Montserrat", sans-serif;
    }

</style>