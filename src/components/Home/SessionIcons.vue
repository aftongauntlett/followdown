<template>
    <div class="container d-flex flex-column justify-content-center py-5">
        <div class="d-flex my-auto flex-wrap flex-md-nowrap">
            <RotateButtons
                    v-for="(info) in cardData"
                   :text="info.text"
                    :dark="true"
                    class="m-md-3 mx-auto my-3"
            >
            </RotateButtons>
        </div>
    </div>
</template>

<script>
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "SessionIcons",
        components: {RotateButtons},
        data() {
            return {
                cardData: [
                    {
                        text: 'Create a Session',
                    },
                    {
                        text: 'Join a Session',
                    },
                    {
                        text: 'Host a Server',
                    },
                    {
                        text: 'Personalized Website',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>