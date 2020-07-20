<template>
    <div class="d-flex justify-content-center">
        <b-card
                title="What is this all about?"
                img-src="https://i.pinimg.com/originals/83/01/12/830112e44ab0691d3a2de8e1bd98443b.png"
                img-alt="Image"
                img-bottom
                tag="article"
                style="max-width: 40rem;"
                class="cardFont mt-2"
        >
            <b-card-text>
                <p class="pb-2">
                    Socialize with others from the comfort of your own home. Engage virtually with friends or make new
                    friends.
                    Here you can connect with people who share your interests and join their "Sessions" - or you can
                    create your own and have people join yours.
                    Every Session can be set up with a date and time.
                </p>
                <h4>But why?</h4>
                <p>
                    The purpose is to create an environment to engage + encourage reading, gaming, studying,
                    watching TV or just enjoying some quality time with other people - all from your home. No need to
                    feel isolated anymore. Scheduling activities helps encourage people to make time for one another.
                </p>
                <p>
                    Tired of watching scary movies by yourself? Fear no more. Want to study, but find motivation
                    difficult
                    - having a study buddy can help encourage you to keep at it.
                </p>
                <p>
                    "Science has proven having a schedule helps productivity by 76%" <br> - Some scientist, probably.
                </p>

                <h4>How does it work?</h4>
                <p>You can create or join Sessions. Sessions are events (like watching movies, studying, gaming, reading). For example, you can choose a specific
                game to play and create a Session, schedule it for a specific date and time. If others are interested in playing, they can sign up. On the day its
                scheduled, everyone logs in on the agreed platform and you can begin playing. Same works for movies, studying, reading or just hanging out.</p>

            </b-card-text>
        </b-card>

    </div>

</template>

<script>
    export default {
        name: "AboutMain"
    }
</script>

<style scoped>
    .cardFont {
        border: none !important;
    }

    .card-body {
        padding: unset;
    }

    h4 {
        margin-bottom: .75rem;
    }

    @media only screen and (max-width: 600px) {
        .card {
            padding-left: 20px;
            padding-right: 20px;
      }
    }
</style>