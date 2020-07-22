<template>
  <div class="card">
    <div class="pt-5 aboutHeader d-flex flex-wrap justify-content-center">About Us</div>
    <div class="about">
      <AboutMain />
    </div>
  </div>
</template>

<script>
  import AboutMain from "../components/About/AboutMain";
  export default {
    name: "About",
    components: {
      AboutMain
    }
  }
</script>

<style class="scoped">
  .about {
    font-family: "Montserrat", sans-serif;
  }

  .aboutHeader {
    font-size: 45px;
    font-family: "Montserrat", sans-serif;
    color:  #4e6b82;
    border-bottom: 1px solid  #4e6b82;
    margin: 0 auto;
    width: auto;
  }

</style>