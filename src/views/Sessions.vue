<template>
    <div class="sessionMain mb-1">
        <div >Sessions</div>
        <div class="sessionSecondary">Be social again - in the virtual world.</div>
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
    margin-top: 20px;
    padding: 60px;
    font-size: 50px;
    background-color: rgba(222, 211, 230, 0.25);
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