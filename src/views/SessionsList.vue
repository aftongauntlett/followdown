<template>
    <div>
        Sessions List
        <div v-for="session in sessions" >
            {{ session }}
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
    export default {
        name: "SessionsList",
        data(){
            return{
                sessions: null,
            }
        },
        mounted() {
            firebase.database().ref(`sessions/${this.$route.params.sessionType}`).on("value", snapshot => {
                this.sessions = snapshot.val()
            })
        }
    }
</script>

<style scoped>

</style>