<template>
    <div>FOLLOW | <span class="subtitle" :class="{light}">down</span></div>
</template>

<script>
    export default {
        name: "FollowDown",
        props: [
            "light"
        ]
    }
</script>

<style scoped>
    .light {
        color: white;
    }

    .subtitle {
        font-family: 'Montserrat', sans-serif;
        font-size: smaller;
        font-weight: lighter;
    }

</style>