<template>
    <div class="container">
        <b-form @submit.prevent @submit="createSession" >
            <label for="nameInput">Session Name</label>
            <b-form-input v-model="name" id="nameInput"></b-form-input>

            <label for="descriptionInput">Session Description</label>
            <b-form-textarea v-model="desc" id="descriptionInput"></b-form-textarea>

            <label for="gameTitle">Game Title</label>
            <b-form-input v-model="game" id="gameTitle"></b-form-input>

            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>

            <label for="ContactInfo">Game Title</label>
            <b-form-input v-model="contact" id="ContactInfo"></b-form-input>

            <label for="age">Age Range</label>
            <b-form-select v-model="age" :options="options" id="age"></b-form-select>

            <b-button type="submit" variant="success" >Create</b-button>
        </b-form>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "CreateSession",
        data() {
            return {
                name: "",
                desc: "",
                game: "",
                date: "",
                contact: "",
                age: "",
                options: [
                    {
                        value: 0,
                        text: "Under 15"
                    },
                    {
                        value: 1,
                        text: "15-18"
                    }
                ]

            }
        },
        methods: {
            createSession(){
                firebase.database().ref('/sessions/play').push({
                    owner: firebase.auth().currentUser.uid,
                    name: this.name,
                    desc: this.desc,
                    game: this.game,
                    date: this.date,
                    contact: this.contact,
                    age: this.age,
                }).then (response => {
                    alert("Session Created");
                    this.$router.push({name: "Sessions"})
                })
            }
        }
    }
</script>

<style scoped>

</style>