<template>
  <div>
    <div class="pt-5 aboutHeader d-flex flex-wrap">Offers</div>
    <div class="about pt-5">
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
    color: #51356E;
    border-bottom: 1px solid #DED3E6;
    margin: 0 auto;
    width: auto;
  }

</style>