<template>
    <div class="sessions flex-wrap w-100">
        <b-card-group deck>
            <b-card title="Play" class="grow m-lg-5 pt-lg-5" img-src="https://cdn.shopify.com/s/files/1/0219/0638/files/20191112_Integration_Razer_01.jpg?v=1573790671" img-alt="gaming setup" img-top>
                <b-card-text>
                    <b-button :to="{name: 'Sessions List', params: {sessionType: 'play'}}" v-if="playSessions">
                        {{ Object.keys(playSessions).length }} sessions planned.
                    </b-button>
                    Create or Join a Gaming Session, set up a date and time to play Steam, X-Box, Playstation, board games, D&D and more.
                    <b-button :to="{name: 'Create Session'}">Play</b-button>
                </b-card-text>
            </b-card>
            <b-card title="Learn" class="grow m-lg-5 pt-lg-5"  img-src="https://s15993.pcdn.co/wp-content/uploads/2019/06/fintech_technology_blockchain.jpg" img-alt="Image" img-top>
                <b-card-text>
                    Create or Join a Study Session, set up a date and time to study with others using YouTube, Udemy and more.
                </b-card-text>
            </b-card>
            <b-card title="Read" class="grow m-lg-5 pt-lg-5"  img-src="https://www.wallpaperup.com/uploads/wallpapers/2015/02/02/608506/bd886f9a83d9d0feea05abd5dd0b194c-700.jpg" img-alt="Image" img-top>
                <b-card-text>
                    Create or Join a Reading Session, set up a date and time to read or listen to audio books with others using books, Kindle, Audible and more.
                </b-card-text>
            </b-card>
            <b-card title="Watch" class="grow m-lg-5 pt-lg-5" img-src="https://www.promisesbehavioralhealth.com/wp-content/uploads/2019/08/iStock_000044731126_Large.jpg" img-alt="Image" img-top>
                <b-card-text>
                    Create or Join a TV Binge Session, set up a date and time to watch movies or tv shows with others using YouTube, Netflix, Hulu and more.
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "SessionMain",
        data() {
            return{
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
.sessions {
    color: black;
    font-size: 20px;
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

.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.1);
}
</style>