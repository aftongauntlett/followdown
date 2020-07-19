<template>
    <div>
        <img :src="user.photoURL" alt="users profile picture">
        <div>
            {{ user.displayName }}
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        props: {
            user: {
                default: {}
            }
        }
    }
</script>

<style scoped>

</style>