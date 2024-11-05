<template>
  <div class="map-page">
    <MapComponent /> <!-- Embed the Map component -->
    <ButtonOverlay /> <!-- Overlay for buttons -->
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue';
import ButtonOverlay from '@/components/ButtonOverlay.vue';

export default {
  name: 'MapPage',
  components: {
    MapComponent,
  },
};
</script>

<style scoped>
/* Ensure the parent container has relative positioning */
.map-page {
  position: relative;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
}
</style>