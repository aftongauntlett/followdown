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
                <span style="color: #DED3E6">FollowDown</span> | All Rights Reserved
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
        color: #51356E;
        font-family: "Montserrat", sans-serif;
    }

    .companyName {
        padding-bottom: 10px;
        font-size: 25px;
        color: #51356E !important;
        font-family: "Montserrat", sans-serif;
    }

    .contactInfo {
        padding-top: 10px;
        background-image: linear-gradient(to right, #988ca2, #ddafdd 80%);
    }

    .contactButton {
        border: unset;
        color: #51356E;
    }

    .fontStyle {
        text-align: center;
        color: #A190B2;
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
        color: #51356E;
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
