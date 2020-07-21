<template>
    <div class="container d-flex pt-5">
            <ProfileCard/>
            <SessionMain />
    </div>
</template>

<script>
    import ProfileCard from "../components/Profile/ProfileCard";
    import SessionsCard from "../components/Profile/SessionsCard";
    import SessionMain from "../components/Session/SessionMain";

    export default {
        name: "Profile",
        components: {SessionMain, SessionsCard, ProfileCard}
    }
</script>

<style scoped>

</style>