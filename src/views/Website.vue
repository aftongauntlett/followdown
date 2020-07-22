<template>
    <div class="d-flex flex-wrap justify-content-around pt-5 py-5">
        <b-card
                title="Personal Website"
                img-src="https://toledolibrary.s3.amazonaws.com/uploads/images/blog/_large/Computer-Coding-Laptop.jpg"
                img-alt="laptop with coding on screen"
                img-top
                tag="article"
                style="max-width: 40rem;"
                class="mb-2"
        >
            <b-card-text>
                Let us design and build a custom website for your Guild or gaming group. Fully customizable to your specs.
                If you do not have a design in mind, we can design it for you.</b-card-text>
               <p>
                   Examples of sites we have built:
               </p>
                <ul>
                    <li>Guilds</li>
                    <li>D&D Groups</li>
                    <li>Social Groups</li>
                    <li>Private Servers</li>
                </ul>
            <p>Contact us today to find out how to get started!</p>

        </b-card>
    </div>
</template>

<script>
    import ProfileCard from "../components/Profile/ProfileCard";
    import SessionsCard from "../components/Profile/SessionsCard";

    export default {
        name: "Profile",
        components: {SessionsCard, ProfileCard}
    }
</script>

<style scoped>
    .card {
        border: unset !important;
        font-family: "Montserrat", sans-serif;
    }

    img {
        margin-bottom: 30px !important;
    }

    li {
        list-style-type: none;
        padding: 10px;
        font-weight: bold;
    }
    ul {
        padding: unset !important;
    }
</style>