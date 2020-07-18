<template>
    <div>
        <div class="contactInfo">
            <div class="fontStyle d-flex justify-content-center flex-column">
                <div class="companyName grow">
                    <b>FOLLOW | <span style="color: #DED3E6; font-weight: lighter">down</span></b>
                </div>
                <div class="solid-border align-self-center"></div>
            </div>
            <div class="footerFont">
                &copy; Copyright 2020 |
                <span style="color: #DED3E6">FollowDown</span> | All Rights Reserved
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
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
        background-color: #A190B2;
    }

    .fontStyle {
        text-align: center;
        color: #A190B2;
        margin-top: 30px;
        font-family: "Montserrat", sans-serif;
    }

    .solid-border {
        border: 1px solid #A190B2;
        width: 5%;
        margin-top: 1%;
        margin-bottom: 2%;
        text-align: center;
    }
</style>
