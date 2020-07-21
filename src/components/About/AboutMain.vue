<template>
    <div class="d-flex justify-content-center ">
        <b-card
                tag="article"
                style="max-width: 40rem;"
                class="cardFont mt-2 contactBackground "
        >
            <b-card-text>
                <div class="header">Server Hosting</div>
                <p class="pb-2">
                    If you are looking to play a game but would like your own server, we can host it for you. If you
                    want special mods and customization, just let us know.
                </p>
                <div class="d-flex justify-content-center">
                    <RotateButtons :dark="true" :navTo="{ name: 'Hosting' }"
                                   text="Host"></RotateButtons>
                </div>
                <div class="header pt-5">Custom Website</div>
                <p>Looking for a website for your D&D group or Guild? We build custom made websites tailored to your
                    design specs. Don't have a design in mind? Just tell us your favorite colors and
                    we will create something for you. We will design, build and host your website.</p>
                <div class="d-flex justify-content-center">
                    <RotateButtons :dark="true" :navTo="{ name: 'Website' }"
                                   text="Build"></RotateButtons>
                </div>
            </b-card-text>
        </b-card>

    </div>

</template>

<script>
    import RotateButtons from "../Shared/RotateButtons";

    export default {
        name: "AboutMain",
        components: {RotateButtons}
    }
</script>

<style scoped>
    .cardFont {
        border: none !important;
        padding: 20px;
        margin: 20px;
    }

    .card-body {
        padding: unset;
    }

    @media only screen and (max-width: 600px) {
        .card {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .header {
        font-size: 30px;
        color: #51356E;
        margin-bottom: .75rem;
    }

    p {
        color: rgba(15, 15, 15, 0.77);
    }

</style>