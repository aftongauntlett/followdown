<template>
<!--    <div class="container d-flex pt-5 justify-content-between">-->
<!--            <ProfileCard class="mr-5"/>-->
<!--            <SessionMain />-->
<!--    </div>-->

    <b-row>
        <b-col offset-lg="2" cols="12" lg="2" class="d-flex flex-column justify-content-center align-content-center">
            <ProfileCard />
        </b-col>
        <b-col offset-lg="1" cols="12" lg="5">
            <SessionMain />
        </b-col>
    </b-row>
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