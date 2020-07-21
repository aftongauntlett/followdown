<template>
   <b-form @submit.prevent @submit="onSubmit" >
           <b-form-textarea
                   id="textarea"
                   v-model="aboutMe"
                   rows="3"
                   max-rows="6"
           ></b-form-textarea>
       <RotateButtons class="mainButtons mt-4" type="submit" :dark="true" text="Submit" ></RotateButtons>
   </b-form>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "EditProfile",
        components: {RotateButtons},
        methods: {
            onSubmit(){
                firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update({
                    about: this.aboutMe
                })
                this.$emit("finished")
            }
        },
        props: ["profile"],
        mounted(){
          this.aboutMe = this.profile.about
        },
        data(){
            return {
                aboutMe: ""
            }
        }
    }
</script>

<style scoped>

</style>