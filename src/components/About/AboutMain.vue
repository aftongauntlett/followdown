<template>
    <div class="d-flex justify-content-center">
        <b-card
                title="How does it work?"
                img-src="https://i.pinimg.com/originals/83/01/12/830112e44ab0691d3a2de8e1bd98443b.png"
                img-alt="Image"
                img-bottom
                tag="article"
                style="max-width: 30rem;"
                class="cardFont mt-2"
        >
            <b-card-text>
                <p class="pb-2">
                    Play, Learn, Read, Watch and Socialize with others.Connect with people who share your
                    interests and join their Sessions. Create your own Sessions based on what you enjoy and others can
                    join yours. Every Session is set up with a time and date.
                </p>
                <p>
                    The goal is to create an environment to enjoy reading, gaming, learning,
                    watching movies and TV with someone else. You can set schedules and times.
                </p>

                <h4>What are Sessions?</h4>
                <p>Sessions are events you schedule that other users can sign up to be a part of. If you are interested in creating a study session using Udemy or YouTube for
                    example, you create that Session and others can sign up for that date and time. You can create private or public sessions.</p>

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
</style>