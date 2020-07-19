<template>
    <div>
        <UserInfo :user="user" />
        <EditProfile @finished="edit = !edit" :profile="profile" v-if="edit" />
        <ProfileData :profile="profile" v-else-if="profile" />
        <b-button @click="edit = !edit" v-if="!edit" >Edit your profile</b-button>
    </div>
</template>

<script>
    import firebase from "firebase"
    import UserInfo from "../Shared/UserInfo";
    import EditProfile from "./EditProfile";
    import ProfileData from "./ProfileData";

    export default {
        name: "ProfileCard",
        components: {ProfileData, EditProfile, UserInfo},
        data () {
            return {
                user: {},
                edit: false,
                profile: {}
            }
        },
        mounted () {
            firebase.auth().onAuthStateChanged(user => {
                this.user = user;
                firebase
                  .database()
                  .ref(`users/${user.uid}`)
                  .on('value', snapshot => {
                      this.profile = snapshot.val()
                      console.log(snapshot.val())
                  })
            })
        }
    }
</script>

<style scoped>

</style>