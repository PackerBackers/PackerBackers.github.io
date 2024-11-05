<template>
    <div class="button-overlay">
      <button @click="addFriend" class="btn btn-primary rounded-circle overlay-button">
        <i class="bi bi-plus"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ButtonOverlay",
    methods: {
      addFriend() {
        alert("Add friend functionality triggered!");
      }
    },
  };
  </script>
  
  <style scoped>
  .button-overlay {
    position: absolute;
    bottom: 90px; /* Place just above the navbar */
    right: 20px;
    z-index: 100; /* Ensure it's above the map */
  }
  
  .overlay-button {
    width: 60px;
    height: 60px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
  </style>