<template>

  <div>

    <div class="about pt-5">
      <h1>Have feedback or suggestions?</h1>
      <ContactForm />

    </div>
  </div>
</template>

<script>
  import ContactForm from "../components/About/ContactForm";
  export default {
    name: "About",
    components: {
      ContactForm
    }
  }
</script>

<style class="scoped">
  .about {
    font-family: "Montserrat", sans-serif;
  }


</style>