<template>
    <div class="sessionMain">
        <div >Sessions</div>
        <div class="sessionSecondary">Choose an option below to get started</div>
        <SessionMain />
    </div>

</template>

<script>
    import SessionMain from "../components/Session/SessionMain";
    export default {
        name: "Sessions",
        components: {SessionMain}
    }
</script>

<style scoped>
.sessionMain {
    font-family: 'Lexend Zetta', sans-serif;
    padding: 60px;
    font-size: 50px;
}

    .sessionSecondary {
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
    }

@media only screen and (max-width: 600px) {
    .sessionMain {
        font-size: 30px;
    }

    .sessionSecondary {
        font-size: 15px;
        padding-bottom: 10px;
    }
}

</style>