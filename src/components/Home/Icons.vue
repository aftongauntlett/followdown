<template>
    <div class="menu" :class="{active: showMenu}">
        <b-button class="btn trigger" @click="toggleMenu">
<div class="explore">Explore</div>
        </b-button>
        <div class="icons">
            <div class="rotater">
                <div class="btn btn-icon">
                    <i class="icons fa fa-gamepad"></i>
                </div>
            </div>
            <div class="rotater">
                <div class="btn btn-icon">
                    <i class="icons fa fa-graduation-cap"></i>
                </div>
            </div>
            <div class="rotater">
                <div class="btn btn-icon">
                    <i class="icons fa fa-television"></i>
                </div>
            </div>
            <div class="rotater">
                <div class="btn btn-icon">
                    <i class="icons fa fa-book"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RotateButtons from "../Shared/RotateButtons";
    export default {
        name: "Icons",
        components: {RotateButtons},
        methods: {
            toggleMenu(){
                this.showMenu=!this.showMenu
            }
        },
        data(){
            return {
                showMenu: false
            }
        }
    }


</script>

<style lang="scss" scoped>

    .explore {
        color: white;
        font-family: "Montserrat", sans-serif;

    }
.icons {
    color: #DED3E6;
    padding: 20px;
    font-size: 5rem;
}


*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html, body {
    height: 100%;
    overflow: hidden;
}
body {
    background:
            linear-gradient(45deg, hsla(352, 96%, 45%, 1) 0%, hsla(352, 96%, 45%, 0) 70%),
            linear-gradient(135deg, hsla(253, 95%, 42%, 1) 10%, hsla(253, 95%, 42%, 0) 80%),
            linear-gradient(225deg, hsla(179, 91%, 45%, 1) 10%, hsla(179, 91%, 45%, 0) 80%),
            linear-gradient(315deg, hsla(119, 96%, 49%, 1) 100%, hsla(119, 96%, 49%, 0) 70%);
}
.absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.menu {
    @extend .absolute-center;
    width: 5em;
    height: 5em;

    .btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: unset;
        background: #A190B2;
        opacity: 0;
        z-index: -10;
        cursor: pointer;
        transition: opacity 1s, z-index 0.3s, transform 1s;
        transform: translateX(0);

        .fa {
            @extend .absolute-center;
            font-size: 3em;
            transition: color 0.3s;
        }

        &:hover .fa {
            color: #51356E;

        }

        &.trigger {
            opacity: 1;
            z-index: 100;
            cursor: pointer;
            transition: transform 0.3s;

            &:hover {
                transform: scale(1.2);

                .line {
                    background-color: rgba(255,255,255, 0.7);

                    &:before, &:after {
                        background-color: rgba(255,255,255, 0.7);
                    }
                }
            }

            .line {
                @extend .absolute-center;
                width: 60%;
                height: 6px;
                background: #000;
                border-radius: 6px;
                transition: background-color 0.3s, height 0.3s, top 0.3s;
                color: #51356E;

                &:before, &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 6px;
                    background: #000;
                    border-radius: 6px;
                    transition: background-color 0.3s, transform 0.3s;
                }
                &:before {
                    top: -12px;
                    transform-origin: 15% 100%;
                }
                &:after {
                    top: 12px;
                    transform-origin: 25% 30%;
                }
            }
        }
    }

    .rotater {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: 50% 50%;
    }

    &.active {

        .btn-icon {
            opacity: 1;
            z-index: 50;
        }

        .trigger {

            .line {
                height: 0px;
                top: 45%;

                &:before {
                    transform: rotate(45deg);
                    width: 110%;
                }
                &:after {
                    transform: rotate(-45deg);
                    width: 110%;
                }
            }
        }
    }
}

$numOfElems: 4;

@for $i from 1 through $numOfElems {
    $deg: 360deg / $numOfElems;
    .rotater:nth-child(#{$i}) {
        transform: rotate($deg/-2 + $deg * ($i - 1));
    }

    .menu.active {
        .rotater:nth-child(#{$i}) .btn-icon {
            transform: translateY(-10em) rotate($deg/2 - $deg * ($i - 1));
        }
    }
}
</style>