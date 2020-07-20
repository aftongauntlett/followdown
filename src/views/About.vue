<template>
  <div>
    <h1 class="about pt-5">Socialize - Virtually</h1>
    <div class="about pt-5">
      <AboutMain />
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