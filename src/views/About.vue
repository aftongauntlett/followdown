<template>

  <div>

    <div class="about pt-5">
      <AboutMain />
      <h1>Have feedback or suggestions?</h1>
      <ContactForm />

    </div>
  </div>
</template>

<script>
  import ContactForm from "../components/About/ContactForm";
  import AboutMain from "../components/About/AboutMain";
  export default {
    name: "About",
    components: {
      ContactForm,
      AboutMain
    }
  }
</script>

<style class="scoped">
  .about {
    font-family: "Montserrat", sans-serif;
  }


</style>