<template>
    <div class="d-flex flex-column h-100">
        <div class="homeCard w-100 p-lg-5 mt-5">
            <div class="d-flex flex-wrap container">
                <div class="mx-auto ml-lg-0">
                    <h1>
                        <FollowDown/>
                    </h1>
                    <p>Play Learn Read Watch</p>

                </div>
                <HomeButton class="ml-lg-auto mr-lg-5 mx-auto align-self-center"/>
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
        font-size: 55px;
        color: #51356E;
        font-family: "Montserrat", sans-serif;
    }

    p {
        text-align: left;
        color: #51356E;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        margin: 10px;
    }

    .homeCard {
        background-color: rgba(222, 211, 230, 0.25);
        background-image: url("https://www.desktopbackground.org/download/o/2014/02/24/722271_pastel-gradient-backgrounds-tumblr-wallpaper_1920x1080_h.jpg");
        background-size: cover;
        background-position: center;
    }

</style>