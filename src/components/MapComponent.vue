<template>
  <div class="map-container">
    <!-- The Map Element -->
    <div id="map"></div>

    <!-- Bootstrap Modal for Creating Pin Point -->
    <div
      class="modal fade"
      id="nameModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Pin Point</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveMarker">
              <!-- Point Title -->
              <div class="mb-3">
                <label for="markerName" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="markerName"
                  v-model="markerName"
                  required
                  placeholder="Enter point title"
                />
              </div>

              <!-- Time Duration (Clock Input) -->
              <div class="mb-3">
                <label for="startTime" class="form-label">Start Time</label>
                <input
                  type="time"
                  class="form-control"
                  id="startTime"
                  v-model="startTime"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="endTime" class="form-label">End Time</label>
                <input
                  type="time"
                  class="form-control"
                  id="endTime"
                  v-model="endTime"
                  required
                />
              </div>

              <!-- Description -->
              <div class="mb-3">
                <label for="markerDescription" class="form-label"
                  >Description</label
                >
                <textarea
                  class="form-control"
                  id="markerDescription"
                  v-model="markerDescription"
                  rows="3"
                  placeholder="Describe this point..."
                ></textarea>
              </div>

              <!-- Icon Selection -->
              <div class="mb-3">
                <label for="markerIcon" class="form-label">Select Icon</label>
                <div class="d-flex gap-2 flex-wrap">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faHouse')"
                    :class="{ active: currentIcon === 'faHouse' }"
                  >
                    <i class="fas fa-house"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faHeart')"
                    :class="{ active: currentIcon === 'faHeart' }"
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faMugHot')"
                    :class="{ active: currentIcon === 'faMugHot' }"
                  >
                    <i class="fas fa-mug-hot"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faCar')"
                    :class="{ active: currentIcon === 'faCar' }"
                  >
                    <i class="fas fa-car"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faBicycle')"
                    :class="{ active: currentIcon === 'faBicycle' }"
                  >
                    <i class="fas fa-bicycle"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faMapMarkerAlt')"
                    :class="{ active: currentIcon === 'faMapMarkerAlt' }"
                  >
                    <i class="fas fa-map-marker-alt"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faTree')"
                    :class="{ active: currentIcon === 'faTree' }"
                  >
                    <i class="fas fa-tree"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="selectIcon('faCampground')"
                    :class="{ active: currentIcon === 'faCampground' }"
                  >
                    <i class="fas fa-campground"></i>
                  </button>
                </div>
              </div>

              <!-- Group Selection -->
              <div class="mb-3">
                <label for="markerGroup" class="form-label">Select Group</label>
                <select
                  class="form-select"
                  id="markerGroup"
                  v-model="selectedGroupId"
                >
                  <option value="" disabled>Select a group</option>
                  <option
                    v-for="group in groups"
                    :key="group.id"
                    :value="group.id"
                  >
                    {{ group.name }}
                  </option>
                </select>
              </div>

              <!-- Friends Selection -->
              <div class="mb-3">
                <label for="markerFriends" class="form-label"
                  >Select Friends</label
                >
                <select
                  class="form-select"
                  id="markerFriends"
                  v-model="selectedFriendIds"
                  multiple
                >
                  <option
                    v-for="friend in friends"
                    :key="friend.id"
                    :value="friend.id"
                  >
                    {{ friend.name }}
                  </option>
                </select>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100">
                Save Pin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faHeart,
  faMugHot,
  faCar,
  faBicycle,
  faMapMarkerAlt,
  faTree,
  faCampground,
} from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'; // Ensures icons are available for rendering

// Add all the icons to the library
library.add(
  faHouse,
  faHeart,
  faMugHot,
  faCar,
  faBicycle,
  faMapMarkerAlt,
  faTree,
  faCampground
);
dom.watch();

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      infoWindow: null,
      markerName: '',
      startTime: '',
      endTime: '',
      markerDescription: '',
      currentMarker: null,
      currentIcon: 'faMugHot', // Default icon
      pins: [],
      friends: [],
      groups: [],
      selectedGroupId: null,
      selectedFriendIds: [],
    };
  },
  mounted() {
    this.loadData();
    this.initMap();
  },
  methods: {
    // Load friends, groups, and pins from localStorage
    loadData() {
      // Load friends and groups
      const storedFriends = JSON.parse(localStorage.getItem('friends'));
      const storedGroups = JSON.parse(localStorage.getItem('groups'));

      this.friends = storedFriends || [];
      this.groups = storedGroups || [];

      // Load pins
      const storedPins = JSON.parse(localStorage.getItem('pins'));
      if (storedPins) {
        this.pins = storedPins;
      } else {
        // Use hardcoded pins if none in localStorage
        this.pins = [
          {
            lat: 59.3293,
            lng: 18.0686,
            icon: 'faHouse',
            title: 'House',
            description: 'My home!',
            duration: '08:00-09:00',
            groupId: null,
            friendIds: [],
          },
          {
            lat: 59.3325,
            lng: 18.0649,
            icon: 'faHeart',
            title: 'Heart',
            description: 'A lovely spot',
            duration: '10:00-11:30',
            groupId: null,
            friendIds: [],
          },
          {
            lat: 59.3346,
            lng: 18.07,
            icon: 'faMugHot',
            title: 'Mug',
            description: 'Great coffee here!',
            duration: '15:00-16:00',
            groupId: null,
            friendIds: [],
          },
        ];
        // Save hardcoded pins to localStorage
        this.savePins();
      }
    },
    // Save pins to localStorage
    savePins() {
      localStorage.setItem('pins', JSON.stringify(this.pins));
    },
    initMap() {
      const mapCenter = { lat: 59.3293, lng: 18.0686 };
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 12,
      });

      this.infoWindow = new google.maps.InfoWindow();

      // Add pins to the map
      this.pins.forEach((pin) => {
        this.addMarker(pin);
      });

      // Add new marker on map click
      this.map.addListener('click', (event) => {
        this.currentMarker = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          icon: this.currentIcon,
        };
        this.openModal();
      });
    },
    addMarker(location) {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map,
        title: location.title || 'Untitled',
        icon: {
          path: this.getIconPath(location.icon),
          fillColor: '#ff6347',
          fillOpacity: 1,
          strokeWeight: 1,
          scale: 0.08,
        },
      });

      // Display InfoWindow on click
      marker.addListener('click', () => {
        this.openInfoWindow(marker, location);
      });
    },
    openInfoWindow(marker, location) {
      const groupName = this.getGroupNameById(location.groupId);
      const friendNames = this.getFriendNamesByIds(location.friendIds);

      let content = `
        <h5>${marker.getTitle()}</h5>
        <p><strong>Description:</strong> ${location.description || ''}</p>
        <p><strong>Duration:</strong> ${location.duration || ''}</p>
      `;

      if (groupName) {
        content += `<p><strong>Group:</strong> ${groupName}</p>`;
      }

      if (friendNames.length > 0) {
        content += `<p><strong>Friends:</strong> ${friendNames.join(', ')}</p>`;
      }

      this.infoWindow.setContent(content);
      this.infoWindow.open(this.map, marker);
    },
    openModal() {
      const modal = new window.bootstrap.Modal(
        document.getElementById('nameModal')
      );
      modal.show();
    },
    selectIcon(icon) {
      this.currentIcon = icon;
    },
    saveMarker() {
      const duration = `${this.startTime}-${this.endTime}`;
      this.currentMarker.title = this.markerName;
      this.currentMarker.description = this.markerDescription;
      this.currentMarker.duration = duration;
      this.currentMarker.icon = this.currentIcon;
      this.currentMarker.groupId = this.selectedGroupId;
      this.currentMarker.friendIds = this.selectedFriendIds;

      // Add the marker to the map and to the pins array
      this.addMarker(this.currentMarker);
      this.pins.push(this.currentMarker);
      this.savePins(); // Save pins to localStorage

      // Reset fields and close modal
      this.markerName = '';
      this.startTime = '';
      this.endTime = '';
      this.markerDescription = '';
      this.currentMarker = null;
      this.selectedGroupId = null;
      this.selectedFriendIds = [];
      const modal = window.bootstrap.Modal.getInstance(
        document.getElementById('nameModal')
      );
      modal.hide();
    },
    getGroupNameById(groupId) {
      const group = this.groups.find((g) => g.id === groupId);
      return group ? group.name : null;
    },
    getFriendNamesByIds(friendIds) {
      return this.friends
        .filter((friend) => friendIds.includes(friend.id))
        .map((friend) => friend.name);
    },
    getIconPath(iconName) {
      // Map icon names to SVG paths
      const icons = {
        faHouse: faHouse.icon[4],
        faHeart: faHeart.icon[4],
        faMugHot: faMugHot.icon[4],
        faCar: faCar.icon[4],
        faBicycle: faBicycle.icon[4],
        faMapMarkerAlt: faMapMarkerAlt.icon[4],
        faTree: faTree.icon[4],
        faCampground: faCampground.icon[4],
      };
      return icons[iconName] || faMugHot.icon[4]; // Default to faMugHot if no match
    },
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  height: calc(100vh - 50px);
  width: 100vw;
}

#map {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.modal-content {
  border-radius: 10px;
  padding: 15px;
}

.modal-header {
  background-color: #007bff;
  color: #fff;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-outline-secondary.active {
  background-color: #007bff;
  color: white;
}
</style>