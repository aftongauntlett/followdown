<template>
    <div>
        <div class="contactInfo">
            <div class="fontStyle d-flex justify-content-center flex-column">
                <div class="companyName">
                    <b>
                        <FollowDown :light="true"/>
                    </b>
                </div>
                <div>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
                <b-button variant="outline" class="contactButton" :to="{ name: 'About' }">Contact & About</b-button>
            </div>
            <div class="footerFont">
                &copy; Copyright 2020 |
                <span style="color: white; font-weight: lighter">FollowDown</span> | All Rights Reserved
            </div>
        </div>
    </div>
</template>

<script>
    import FollowDown from "./Shared/FollowDown";
    import RotateButtons from "./Shared/RotateButtons";

    export default {
        components: {RotateButtons, FollowDown}
    };
</script>

<style scoped>
    .footerFont {
        padding-top: 15px;
        padding-bottom: 10px;
        color: #000000;
        font-family: "Montserrat", sans-serif;
    }

    .companyName {
        padding-bottom: 10px;
        font-size: 25px;
        color: #000000 !important;
        font-family: "Montserrat", sans-serif;
    }

    .contactInfo {
        padding-top: 10px;
        background-image: linear-gradient(to right, #878da3 , #596b92 80%);
    }

    .contactButton {
        border: unset;
        color: white;

    }

    .fontStyle {
        text-align: center;
        color: white;
        margin-top: 30px;
        font-family: "Montserrat", sans-serif;
    }

    .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
    }

    .fa:hover {
        opacity: 0.9;
        color: #000000;
    }

    .fa-facebook {
        color: white;
    }

    .fa-twitter {
        color: white;
    }

    .fa-instagram {
        color: white;
    }
</style>
