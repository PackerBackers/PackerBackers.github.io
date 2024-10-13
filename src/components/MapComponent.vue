<template>
  <div class="map-container">
    <!-- The Map Element -->
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2093 }, // Center of the map (Sydney)
        zoom: 10,
      });
    },
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  height: calc(100vh - 50px); /* Full height minus the navbar height */
  width: 100vw;
}

#map {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>