<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
        <b-navbar-brand class="brand grow" :to="{ name: 'Home' }">
            <FollowDown :light="true"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="grow" v-if="!user" :to="{ name: 'Login' }">Login or Join</b-nav-item>
                <b-nav-item :to="{ name: 'Profile' }" class="grow" v-else>{{user.displayName}}</b-nav-item>
                <b-nav-item class="grow" v-if="user" :to="{ name: 'Sessions' }">View Sessions</b-nav-item>
                <b-nav-item class="grow" v-if="!user" :to="{ name: 'About' }">About Us</b-nav-item>
                <b-nav-item class="grow" @click="logout" v-if="user">Logout</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import FollowDown from "./Shared/FollowDown";
    import firebase from 'firebase';

    export default {
        components: {FollowDown},
        data(){
            return {
                user: null
            }
        },
        mounted(){
            this.user = firebase.auth().currentUser;
            firebase.auth().onAuthStateChanged(user => {
                this.user = user;
            })
        },

        methods: {
            logout(){
                firebase.auth().signOut();
                this.user = null
                this.$router.push("/")
            }
        }
    };
</script>

<style scoped lang="scss">
    .navbar {
        font-size: 20px;
    }

    .bg-dark {
        background-image: linear-gradient(to right, #878da3, #596b92 80%);
        font-family: "Montserrat", sans-serif;
    }

    .nav-link {
        color: #bfc5dd !important;
    }

    .nav-link:hover {
        color: white !important;
    }

    .grow {
        transition: all .2s ease-in-out;
    }

    .grow:hover {
        transform: scale(1.1);
    }

    .brand {
        font-size: 25px;
        color: black;
    }
</style>
