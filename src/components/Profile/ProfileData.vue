<template>
    <div>
        <h3>About Me</h3>
        <div>
            {{ profile.about }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileData",
        props: ["profile"]
    }
</script>

<style scoped>

</style>