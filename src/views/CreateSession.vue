<template>
    <div class="container d-flex justify-content-center">
        <b-form @submit.prevent @submit="createSession" class="pt-5 pb-5 w-50">
            <div class="aboutHeader pb-5">Create a Session</div>

            <label for="nameInput">Session Name</label>
            <b-form-input v-model="name" id="nameInput"></b-form-input>

            <label class="pt-3" for="descriptionInput">Session Description</label>
            <b-form-textarea v-model="desc" id="descriptionInput" rows="8"></b-form-textarea>

            <label class="pt-3" for="GameTitle">Game Title</label>
            <b-form-input v-model="game" id="gameTitle"></b-form-input>

            <label class="pt-3" for="contact">Contact Information</label>
            <b-form-input v-model="contact" id="ContactInfo"></b-form-input>

            <label class="pt-3" for="country">Select Country</label>
            <country-select v-model="country" :country="country" topCountry="US" />

            <label class="pt-3" for="datepicker">Choose a date</label>
            <b-form-datepicker id="datepicker" v-model="date" class="mb-2"></b-form-datepicker>

            <label class="pt-3" for="timepicker">Choose a time</label>
            <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
            <div class="mt-2"></div>

            <label class="pt-3" for="age">Age Range</label>
            <b-form-select v-model="age" :options="options" id="age"></b-form-select>

            <b-button type="submit" variant="dark" class="mt-5">Create</b-button>
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
                contact: "",
                country: "",
                date: "",
                value: "",
                age: "",
                options: [
                    {
                        value: 0,
                        text: "Everyone"
                    },
                    {
                        value: 0,
                        text: "10+"
                    },
                    {
                        value: 1,
                        text: "Teen"
                    },
                    {
                        value: 2,
                        text: "Mature 17+"
                    },
                    {
                        value: 3,
                        text: "Adults Only 18+"
                    },
                ]

            }
        },
        methods: {
            createSession() {
                firebase.database().ref('/sessions/play').push({
                    owner: firebase.auth().currentUser.uid,
                    name: this.name,
                    desc: this.desc,
                    game: this.game,
                    date: this.date,
                    contact: this.contact,
                    age: this.age,
                }).then(response => {
                    alert("Session Created");
                    this.$router.push({name: "Sessions"})
                })
            }
        }
    }


</script>

<style scoped>
    .aboutHeader {
        font-size: 45px;
        font-family: "Montserrat", sans-serif;
        color: #000000;
        /*border-bottom: 1px solid #7b6f82;*/
        margin: 0 auto;
        width: auto;
    }

    .container {
        font-family: "Montserrat", sans-serif;
    }
</style>