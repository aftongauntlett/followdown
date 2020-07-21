<template>
    <div>
        <img :src="user.photoURL" alt="users profile picture" class="imageInfo">
        <div  class="userInfo mt-3">
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

.userInfo {
    font-size: 30px;
}

    .imageInfo {
        border-radius: 300px;
        width: 30%;
    }
</style>