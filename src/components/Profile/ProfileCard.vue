<template>
    <div>
        <UserInfo class="userInfo pb-4" :user="user" />
        <EditProfile class="userInfo" @finished="edit = !edit" :profile="profile" v-if="edit" />
        <ProfileData class="userInfo" :profile="profile" v-else-if="profile" />
        <b-button @click="edit = !edit" v-if="!edit" class="userInfo mb-4 mt-4" variant="outline-dark">Edit your profile</b-button>

    </div>
</template>

<script>
    import firebase from "firebase"
    import UserInfo from "../Shared/UserInfo";
    import EditProfile from "./EditProfile";
    import ProfileData from "./ProfileData";
    import RotateButtons from "../Shared/RotateButtons";

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
        },
        methods: {
            toggleEdit(){
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>
.userInfo {
    font-family: "Montserrat", sans-serif;
}

.btn {
    border-radius: unset;
}

@media only screen and (max-width: 600px) {
    .userInfo {
        font-family: "Montserrat", sans-serif;
        padding: 20px;
    }

}
</style>