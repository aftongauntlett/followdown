<template>
    <div class="d-flex flex-wrap justify-content-around pt-5 py-5">
        <b-card
                title="Personal Website"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
                Request a Custom Built Website. Fully customizable to your specs. If you do not have a design in mind, we can design it for you.
            </b-card-text>

            <b-button href="#" variant="dark">Request</b-button>
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

</style>