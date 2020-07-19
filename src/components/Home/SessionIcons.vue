<template>
    <div class="container d-flex flex-column justify-content-center py-5">
        <div class="d-flex my-auto flex-wrap flex-md-nowrap">
            <div
                    v-for="(info) in cardData"
                    class="mx-4"
            >
                <div class="m-3">
                    {{info.text}}
                </div>
                <b-btn :to="{name: info.buttonLink}">{{info.buttonText}}</b-btn>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SessionIcons",
        data(){
            return {
                cardData: [
                    {
                        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                        buttonText: 'Check it out',
                        buttonLink: 'Home',
                    },
                    {
                        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                        buttonText: 'Check it out',
                        buttonLink: 'Home',
                    },
                    {
                        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                        buttonText: 'Check it out',
                        buttonLink: 'Home',
                    },
                    {
                        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                        buttonText: 'Check it out',
                        buttonLink: 'Home',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.w-10{
  width: 10%;
}
</style>