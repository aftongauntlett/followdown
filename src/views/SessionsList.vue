<template>
    <div class="container">
        <p class="pt-5 aboutHeader d-flex flex-wrap justify-content-center">Active Sessions</p>
        <b-row class="sessionTitles">
            <b-col>Server Name</b-col>
            <b-col>Game</b-col>
            <b-col>Date</b-col>
            <b-col>Time</b-col>
            <b-col>Age Range</b-col>
            <b-col></b-col>
        </b-row>

        <b-row v-for="(session, key, index) in sessions" :class="{alternate: index % 2}" >
            <b-col>{{ session.name}}</b-col>
            <b-col>{{ session.game}}</b-col>
            <b-col>{{ session.date}}</b-col>
            <b-col>{{ session.time }}</b-col>
            <b-col>{{ session.age }}</b-col>
            <b-col>
                <b-button @click="() => {removeSession(key)} " v-if="session.owner === owner">Delete</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import firebase from "firebase"
    export default {
        name: "SessionsList",
        data(){
            return{
                sessions: null,
                owner: '',
            }
        },
        methods: {
          removeSession(key) {
              firebase.database().ref(`sessions/play/${key}`).remove()
          }
        },
        mounted() {
            firebase.database().ref(`sessions/${this.$route.params.sessionType}`).on("value", snapshot => {
                this.sessions = snapshot.val()
            })
            firebase.auth().onAuthStateChanged(user => {
                this.owner = user.uid;
            })
        }
    }
</script>

<style scoped>

.alternate {
    background-color: rgba(162, 178, 197, 0.29);
}

.aboutHeader {
    font-size: 45px;
    font-family: "Montserrat", sans-serif;
    color: #596b92;
    border-bottom: 1px solid  #596b92;
    margin: 0 auto;
    width: auto;
    margin-bottom: 30px;
}

    .col {
        padding: 20px;
        font-family: "Montserrat", sans-serif;
    }

    .sessionTitles {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: bold;
    }

    .container {
        background-image: url("https://wallpaperplay.com/walls/full/d/7/e/191282.jpg");
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 12px;
    }

</style>