<template>
    <div class="flex-container pt-5">
        <div class="flex-child">
            <ProfileCard/>
            <!--        <SessionsCard/>-->
        </div>
        <div class="flex-child">
            <SessionMain />
        </div>
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
    .flex-container {
        display: flex;
    }

    .flex-child {
        flex: 1;
    }

    .flex-child:first-child {
        margin-right: 20px;
    }
</style>