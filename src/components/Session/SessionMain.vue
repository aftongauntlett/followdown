<template>
    <b-row class="sessions">
        <b-col cols="12" lg="6">
            <b-card title="Create" class="cols-2 w-lg-50 px-2 pt-lg-5"
                    img-src="https://cdn.shopify.com/s/files/1/0219/0638/files/20191112_Integration_Razer_01.jpg?v=1573790671"
                    img-alt="desktop gaming set up with overwatch on screen" img-top>
                <b-card-text>
                    Create a Gaming Session.
                    <div>
                        <b-button class="mt-3" variant="outline-dark" :to="{name: 'Create Session'}">Create Session
                        </b-button>
                    </div>
                </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="12" lg="6">
            <b-card title="Join" class="cols-2 w-lg-50 px-2 pt-lg-5"
                    img-src="https://www.gamespew.com/wp-content/uploads/2019/02/multiplayer.jpg" img-alt="4 people holding nintendo switches"
                    img-top>
                <b-card-text>
                    Sign up to join a Gaming Session.
                    <div>
                        <b-button class="mt-3" variant="outline-dark"
                                  :to="{name: 'Sessions List', params: {sessionType: 'play'}}" v-if="playSessions">
                            {{ Object.keys(playSessions).length }} Sessions Planned
                        </b-button>
                    </div>
                </b-card-text>
            </b-card>

        </b-col>
        <b-col cols="12" lg="6">
            <b-card title="Host a Server" class="cols-2 w-lg-50 px-2 pt-lg-5"
                    img-src="https://techacute.com/wp-content/uploads/2014/12/led-server-lights-data-centre-blue-aisle_edited.jpg"
                    img-alt="server racks" img-top>
                <b-card-text>
                    Let us host a private server for you and your friends.
                    <div class="d-flex justify-content-center flex-wrap pt-3">
                        <b-button variant="outline-dark" :to="{ name: 'Server' }">Host</b-button>
                    </div>
                </b-card-text>
            </b-card>

        </b-col>
        <b-col cols="12" lg="6">
            <b-card title="Website" class="cols-2 w-lg-50 px-2 pt-lg-5"
                    img-src="https://toledolibrary.s3.amazonaws.com/uploads/images/blog/_large/Computer-Coding-Laptop.jpg"
                    img-alt="laptop with coding on screen" img-top>
                <b-card-text>
                    Let us design a custom website for your Guild or Gaming Group.
                    <div class="d-flex justify-content-center flex-wrap pt-3">
                        <b-button variant="outline-dark" :to="{ name: 'Website' }">Website</b-button>
                    </div>
                </b-card-text>
            </b-card>

        </b-col>
    </b-row>
</template>

<script>
    import firebase from "firebase"
    import RotateButtons from "../Shared/RotateButtons";

    export default {
        name: "SessionMain",
        components: {RotateButtons},
        data() {
            return {
                playSessions: null

            }
        },
        mounted() {
            firebase.database().ref("sessions/play").on("value", snapshot => {
                this.playSessions = snapshot.val()
            })
        }
    }
</script>

<style scoped>

    .btn {
        border-radius: unset;
    }

    .sessions {
        color: black;
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
    }

    @media only screen and (max-width: 600px) {
        .sessions {
            font-size: 14px;
        }
    }

    .card {
        border: unset;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        padding-top: 30px;
    }

    .cardDeck {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

</style>