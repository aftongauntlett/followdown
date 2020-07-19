<template>
    <div>
        <h2>What Sessions are you interested in?</h2>
        <b-btn
                class="sessionButton"
                v-for="session in sessions"
                :key="session.text"
                :style="`background-image:url(${session.img})`"
                :pressed="userSessions.includes(session.text)"
                @click="() => {toggleSession(session.text)}"
        > {{ session.text }}</b-btn>

    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "SessionsCard",
        data () {
            return {
                sessions: [
                    {text: "Play", img: ""},
                    {text: "Learn"},
                    {text: "Read"},
                    {text: "Watch"}
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
}
</style>