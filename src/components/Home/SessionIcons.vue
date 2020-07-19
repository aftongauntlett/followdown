<template>
    <div class="container d-flex flex-column justify-content-center py-5">
        <div class="d-flex my-auto flex-wrap flex-md-nowrap">
            <div
                    v-for="(info) in cardData"
                    class="mx-md-4 mx-auto my-2 my-md-0 btn session idle"
            >
                    <div class="m-3">
                        {{info.text}}
                    </div>
                </div>
<!--                <div class="container">-->
<!--                    <div class="idle btn session m-3">-->
<!--                        {{info.text}}-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SessionIcons",
        data() {
            return {
                cardData: [
                    {
                        text: 'Play Together',
                        // buttonText: 'Check it out',
                        // buttonLink: 'Home',
                    },
                    {
                        text: 'Learn Together',
                        // buttonText: 'Check it out',
                        // buttonLink: 'Home',
                    },
                    {
                        text: 'Watch Together',
                        // buttonText: 'Check it out',
                        // buttonLink: 'Home',
                    },
                    {
                        text: 'Read Together',
                        // buttonText: 'Check it out',
                        // buttonLink: 'Home',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .w-10 {
        width: 10%;
    }

    .session {
        font-family: "Montserrat", sans-serif;
        color: #51356E;
        font-size: 20px;
    }

    .btn {
        position: relative;
        width: 256px;
        height: 100px;
        line-height: 55px;
        transition: all 0.3s;

    span {
        transition: all 0.3s;
        tranform: scale(1, 1);
    }

    }

    .btn::before, .btn::after {
        content: '';
        position: absolute;
        transition: all 0.3s;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .idle::before, .idle::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        z-index: 1;
        transition: all 0.3s;
        border: 1px solid rgba(81, 53, 110, 0.5);

    }

    .idle:hover::after {
        animation-name: rotatecw;
        animation-duration: 2s;
    }

    .idle:hover::before {
        animation-name: rotateccw;
        animation-duration: 3s;
    }

    .idle:hover::after, .idle:hover::before {
        left: 90px;
        width: 64px;

        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes rotatecw {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes rotateccw {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }

</style>