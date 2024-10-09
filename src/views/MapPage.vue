<template>
  <div>
    <MapComponent /> <!-- Embed the Map component -->
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue';

export default {
  name: 'MapPage',
  components: {
    MapComponent, // Import and register the MapComponent
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>