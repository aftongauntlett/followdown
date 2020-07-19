<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
        <b-navbar-brand class="grow" :to="{ name: 'Home' }">
            <FollowDown :light="true"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="grow" :to="{ name: 'Login' }">Login</b-nav-item>
                <b-nav-item class="grow" :to="{ name: 'Join' }">Join</b-nav-item>
                <b-nav-item class="grow" :to="{ name: 'About' }">About Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import FollowDown from "./Shared/FollowDown";

    export default {
        components: {FollowDown}
    };
</script>

<style scoped lang="scss">
    .navbar {
        font-size: 20px;
    }

    .bg-dark {
        background-image: linear-gradient(to right, #a08fb2, #b9a4c5);
        font-family: "Montserrat", sans-serif;
    }

    .nav-link {
        color: #51356E !important;
    }

    .nav-link:hover {
        color: #DED3E6 !important;
    }

    .navbar-brand {
        color: #51356E;
    }

    .grow {
        transition: all .2s ease-in-out;
    }

    .grow:hover {
        transform: scale(1.1);
    }
</style>
