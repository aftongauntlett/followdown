<template>
    <div>
        <h3>Have feedback or suggestions?</h3>
        <div class="d-flex justify-content-center mt-3 mb-3">
            <div style="max-width: 600px; min-width: 400px" class="formFill w-10">
                <b-form @submit="onSubmit" v-if="show">
                    <b-form-group id="email-input-group" label="Email address:" label-for="email-input">
                        <b-form-input
                                id="email-input"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="name-input-group" label="Your Name:" label-for="name-input">
                        <b-form-input id="name-input" v-model="form.name" required placeholder="Enter name"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Message:" label-for="message-textarea">
                        <b-form-textarea
                                id="message-textarea"
                                v-model="form.message"
                                placeholder="Send us a message..."
                                rows="8"
                                max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                    <RotateButtons :dark="true" type="submit" text="Submit" />
                </b-form>

                <div>
                    <b-modal id="modal-center" centered title="Thank you" ok-only>
                        <p class="notify my-4">We will be in touch shortly.</p>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "ContactForm",
        components: {RotateButtons},
        data() {
            return {
                form: {
                    email: "",
                    name: "",
                    message: ""
                },
                show: true
            };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                axios
                    .get(
                        `https://us-central1-gauntlett-design.cloudfunctions.net/sendMail?dest=afton.gauntlett@gmail.com&email=${this.form.email}&name=${this.form.name}&message=${this.form.message}`
                    )
                    .then(() => {
                        this.$bvModal.show("modal-center");
                        this.form = {
                            email: "",
                            name: "",
                            message: ""
                        };
                    })
                    .catch(e => {
                        alert(e);
                    });
            }
        }
    };
</script>

<style scoped>
    .notify {
        font-family: "Martel", serif;
        font-size: 20px;
        text-align: center;
    }

    @media only screen and (min-width: 300px) {
        .formFill {
            min-width: 235px !important;
        }
    }

    @media only screen and (min-width: 600px) {
        .formFill {
            min-width: 400px !important;
        }
    }
</style>
