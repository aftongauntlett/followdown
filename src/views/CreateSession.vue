<template>
    <div class="container d-flex justify-content-center">
        <b-form @submit.prevent @submit="createSession" class="pt-5 pb-5 w-50">
            <div class="aboutHeader mb-5">Create a Session</div>

            <label for="nameInput">Session Name</label>
            <b-form-input required v-model="name" id="nameInput"></b-form-input>

            <label class="pt-3" for="descriptionInput">Session Description</label>
            <b-form-textarea v-model="desc" id="descriptionInput" rows="8"></b-form-textarea>

            <label class="pt-3" for="GameTitle">Game Title</label>
            <b-form-input v-model="game" id="gameTitle"></b-form-input>

            <label class="pt-3" for="contact">Contact Information</label>
            <b-form-input v-model="contact" id="ContactInfo"></b-form-input>

            <label class="pt-3" for="country">Select Country</label>
            <div>
                <country-select class="country" v-model="country" :country="country" topCountry="US" />

            </div>

            <label class="pt-3" for="datepicker">Choose a date</label>
            <b-form-datepicker id="datepicker" v-model="date" class="mb-2"></b-form-datepicker>

            <label class="pt-3" for="timepicker">Choose a time</label>
            <b-form-timepicker v-model="time" locale="en"></b-form-timepicker>
            <div class="mt-2"></div>

            <label class="pt-3" for="age">Age Range</label>
            <b-form-select v-model="age" :options="options" id="age"></b-form-select>

        <b-button v-b-modal.modal-center type="submit" variant="dark" class="mt-5">Create</b-button>
        </b-form>

        <b-modal class="modalText" id="modal-center" centered title="Complete">
            <p class="my-4">Session Created</p>
        </b-modal>

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
                time: "",
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
                    country: this.country,
                    time: this.time,
                    contact: this.contact,
                    age: this.age,
                }).then(response => {
                    // alert("Session Created");
                    // this.$router.push({name: "Sessions"})
                })
            }
        },
    }


</script>

<style scoped>
    .aboutHeader {
        font-size: 45px;
        font-family: "Montserrat", sans-serif;
        color:  #4e6b82;
        border-bottom: 1px solid  #4e6b82;
        width: auto;
        margin-bottom: 30px;

    }

    .container {
        font-family: "Montserrat", sans-serif;
    }

    .country {
        color: #6c757d !important;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-color: #6c757d !important;
        border-radius: .25rem;
        border: 1px solid #ced4da !important;
        width: 100%;
        line-height: 1.5;
        height: calc(1.5em + .75rem + 2px);
    }
</style>