<template>
    <div class="d-flex flex-wrap justify-content-around pt-5 py-5">
       Website
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