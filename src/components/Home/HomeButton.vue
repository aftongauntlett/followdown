<template>
    <div class="d-flex flex-column">
        <b-button :to="{ name: 'Login' }" class="offset py-3 px-5" variant="dark">Log In</b-button>
        <b-button :to="{ name: 'Join' }" class="offset py-3 px-5" variant="dark">Join</b-button>
        <b-button :to="{ name: 'About' }" class="offset py-3 px-5" variant="dark">About</b-button>
    </div>
</template>

<script>
    export default {
        name: "HomeButton"
    }
</script>

<style lang="scss" scoped>

    .btn {
        margin-bottom: 69px;
        font-size: 30px;
        font-family: "Montserrat", sans-serif;
        font-weight: lighter;
        color: var(--color);
        transition: 0.25s;
        background: none;
        border: 2px solid;
        line-height: 1;

    &:hover,
    &:focus {
         border-color: var(--hover);
         color: #fff;
     }
    }

    .offset {
        box-shadow:
                0.2em 0.2em 0 0 var(--color),
                inset 0.2em 0.2em 0 0 var(--color);

    &:hover,
    &:focus {
         box-shadow:
                 0 0 0 0 var(--hover),
                 inset 6em 3.5em 0 0 var(--hover);
     }
    }
    $colors: (
            offset: #A190B2
    );
    @each $button, $color in $colors {
        .#{$button} {
            --color: #{$color};
            --hover: #{darken($color, 30%)};
        }
    }


</style>