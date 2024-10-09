<template>
  <div class="map-container">
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
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#map {
  height: 100%;
  width: 100%;
}
</style>