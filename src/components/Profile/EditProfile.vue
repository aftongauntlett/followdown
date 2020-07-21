<template>
   <b-form @submit.prevent @submit="onSubmit" >
           <b-form-textarea
                   id="textarea"
                   v-model="aboutMe"
                   rows="3"
                   max-rows="6"
           ></b-form-textarea>
       <b-btn class="mt-3" type="submit">
           Submit
       </b-btn>
   </b-form>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "EditProfile",
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