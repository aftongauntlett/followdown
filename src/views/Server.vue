<template>
    <div class="d-flex flex-wrap justify-content-around pt-5 py-5">
        <b-card
                title="Server Hosting"
                img-src="https://techacute.com/wp-content/uploads/2014/12/led-server-lights-data-centre-blue-aisle_edited.jpg"
                img-alt="server racks"
                img-top
                tag="article"
                style="max-width: 40rem;"
                class="hosting mb-2"
        >
            <b-card-text>
                Managing your server isn't always easy or possible. We can take out the
                confusion and host them for you. We also provide full support, you never have to mess with it. Get started with hundreds of games and mods today. </b-card-text>
                <ul>
                    <li>24/7 Support</li>
                    <li>Instant Activation</li>
                    <li>Fast Pings</li>
                    <li>Low Prices</li>
                </ul>
            <p>Contact us today to find out how to get started!</p>

        </b-card>
    </div>
</template>

<script>
    import ProfileCard from "../components/Profile/ProfileCard";
    import SessionsCard from "../components/Profile/SessionsCard";

    export default {
        name: "Profile",
        components: {SessionsCard, ProfileCard}
    }
</script>

<style scoped>
    .card {
        border: unset !important;
        font-family: "Montserrat", sans-serif;
    }

    img {
        margin-bottom: 30px !important;
    }
    li {
        list-style-type: none;
        padding: 10px;
        font-weight: bold;
    }
    ul {
        padding: unset !important;
    }
</style>