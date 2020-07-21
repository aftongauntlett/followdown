<template>
    <div class="d-flex flex-column h-100">
        <div class="homeCard w-100 p-lg-5 mt-5">
            <div class="d-flex flex-wrap container">
                <div class="mx-auto ml-lg-0">
                    <h1 class="pt-lg-5">
                        <FollowDown/>
                    </h1>
                    <p>Be Social. Be Virtual.</p>
                </div>
                <HomeButton class="ml-lg-auto mr-lg-5 mb-4 mx-auto align-self-center"/>
            </div>
        </div>
        <SessionIcons class="flex-grow-1"/>
    </div>

</template>

<script>
    import HomeButton from "./HomeButton";
    import FollowDown from "../Shared/FollowDown";
    import Icons from "./Icons";
    import SessionIcons from "./SessionIcons";

    export default {
        name: "HomeMain",
        components: {SessionIcons, Icons, FollowDown, HomeButton},
    }
</script>

<style scoped>
    h1 {
        text-align: left;
        font-size: 65px;
        color: #51356e;
        font-family: 'Lexend Zetta', sans-serif;
    }

    p {
        text-align: left;
        color: #51356E;
        font-family: 'Lexend Zetta', sans-serif;
        font-size: 20px;
        margin: 10px;
    }

    .homeCard {
        background-color: rgba(214, 198, 225, 0.25);
        background-image: url("https://wallpaperplay.com/walls/full/d/7/e/191282.jpg");
        background-size: cover;
        background-position: center;
        min-height: 35vh;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 45px;
            padding-top: 30px;
            font-family: "Montserrat", sans-serif;
        }

        p {
            font-size: 15px;
        }
    }

</style>