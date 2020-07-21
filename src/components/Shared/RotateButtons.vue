<template>
    <b-button class="idle mainButtons" :class="{dark}" v-if="onClick" @click="onClick">{{ text }}</b-button>
    <b-button class="d-flex justify-content-center idle mainButtons" :class="{dark}" v-else-if="navTo" :to="navTo"><div class="my-auto">{{ text }}</div></b-button>
    <b-button class="idle mainButtons" :class="{dark}" v-else :type="type" >{{ text }}</b-button>
</template>

<script>
    export default {
        name: "RotateButtons",
        props: [
            "onClick",
            "navTo",
            "text",
            "dark",
            "type"
        ]
    }

</script>

<style lang="scss" scoped>
    .dark {
        color: black;
    }

    .mainButtons {
        font-family: "Montserrat", sans-serif;
        color: black;
        font-size: 20px;
    }

    .btn-secondary {
        border: none;
    }

    .btn {
        position: relative;
        width: 256px;
        height: 100px;
        line-height: 55px;
        transition: all 0.3s;
        background-color: unset;

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
        border: 1px solid rgba(0, 0, 0, 0.5);
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