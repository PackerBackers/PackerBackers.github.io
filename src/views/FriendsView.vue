<template>
  <!-- Main container -->
  <div class="friends-view">
    <!-- List of groups and friends -->
    <div class="groups-list">
      <div class="group-card" v-for="group in groups" :key="group.id">
        <div class="group-header">
          <h2>{{ group.name }}</h2>
          <button class="btn btn-danger btn-sm" @click="deleteGroup(group.id)">
            Delete Group
          </button>
        </div>
        <div class="friends-list">
          <div
            class="friend-card"
            v-for="friend in getFriendsByGroup(group.id)"
            :key="friend.id"
          >
            <div class="friend-info">
              <h3>{{ friend.name }}</h3>
              <p>Best Friend: {{ friend.isBestFriend ? 'Yes' : 'No' }}</p>
            </div>
            <div class="friend-actions">
              <button
                class="btn btn-danger btn-sm"
                @click="deleteFriend(friend.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Add Friend Button -->
    <button
      @click="openAddFriendModal"
      class="btn btn-primary rounded-circle overlay-button"
    >
      <i class="bi bi-plus"></i>
    </button>

    <!-- Floating Add Group Button -->
    <button
      @click="openAddGroupModal"
      class="btn btn-secondary rounded-circle overlay-button-group"
    >
      <i class="bi bi-folder-plus"></i>
    </button>

    <!-- Modal for Adding Friend -->
    <div
      class="modal fade"
      id="addFriendModal"
      tabindex="-1"
      aria-labelledby="addFriendModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Add New Friend</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addFriend">
              <!-- Friend's Name -->
              <div class="mb-3">
                <label for="friendName" class="form-label">Friend's Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="friendName"
                  v-model="newFriendName"
                  required
                  placeholder="Enter friend's name"
                />
              </div>

              <!-- Group Selection -->
              <div class="mb-3">
                <label for="friendGroup" class="form-label">Select Group</label>
                <select
                  class="form-select"
                  id="friendGroup"
                  v-model="newFriendGroupId"
                  required
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

              <!-- Best Friend Toggle -->
              <div class="mb-3">
                <label class="form-label">Best Friend</label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="bestFriendToggle"
                    v-model="newFriendIsBestFriend"
                  />
                  <label class="form-check-label" for="bestFriendToggle">
                    {{ newFriendIsBestFriend ? "Yes" : "No" }}
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100">
                Add Friend
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Adding Group -->
    <div
      class="modal fade"
      id="addGroupModal"
      tabindex="-1"
      aria-labelledby="addGroupModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Add New Group</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addGroup">
              <!-- Group Name -->
              <div class="mb-3">
                <label for="groupName" class="form-label">Group Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="groupName"
                  v-model="newGroupName"
                  required
                  placeholder="Enter group name"
                />
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-secondary w-100">
                Add Group
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendsView",
  data() {
    return {
      friends: [],
      groups: [],
      newFriendName: "",
      newFriendGroupId: null,
      newFriendIsBestFriend: false,
      newGroupName: "",
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    // Load data from localStorage or use hardcoded data
    loadData() {
      const storedFriends = JSON.parse(localStorage.getItem("friends"));
      const storedGroups = JSON.parse(localStorage.getItem("groups"));

      if (storedFriends && storedGroups) {
        this.friends = storedFriends;
        this.groups = storedGroups;
      } else {
        // Use hardcoded data if nothing in localStorage
        this.groups = [
          { id: 1, name: "Family" },
          { id: 2, name: "Work" },
        ];
        this.friends = [
          { id: 1, name: "Alice", groupId: 1, isBestFriend: true },
          { id: 2, name: "Bob", groupId: 2, isBestFriend: false },
          { id: 3, name: "Charlie", groupId: 1, isBestFriend: false },
        ];
        // Save hardcoded data to localStorage
        this.saveData();
      }
    },
    // Save friends and groups to localStorage
    saveData() {
      localStorage.setItem("friends", JSON.stringify(this.friends));
      localStorage.setItem("groups", JSON.stringify(this.groups));
    },
    // Open Add Friend Modal
    openAddFriendModal() {
      const modal = new window.bootstrap.Modal(
        document.getElementById("addFriendModal")
      );
      modal.show();
    },
    // Add Friend
    addFriend() {
      const newId = this.friends.length
        ? Math.max(...this.friends.map((f) => f.id)) + 1
        : 1;
      this.friends.push({
        id: newId,
        name: this.newFriendName,
        groupId: this.newFriendGroupId,
        isBestFriend: this.newFriendIsBestFriend,
      });
      this.saveData(); // Save to localStorage
      // Reset form fields
      this.newFriendName = "";
      this.newFriendGroupId = null;
      this.newFriendIsBestFriend = false;
      // Close modal
      const modal = window.bootstrap.Modal.getInstance(
        document.getElementById("addFriendModal")
      );
      modal.hide();
    },
    // Delete Friend
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
      this.saveData(); // Update localStorage
    },
    // Open Add Group Modal
    openAddGroupModal() {
      const modal = new window.bootstrap.Modal(
        document.getElementById("addGroupModal")
      );
      modal.show();
    },
    // Add Group
    addGroup() {
      const newId = this.groups.length
        ? Math.max(...this.groups.map((g) => g.id)) + 1
        : 1;
      this.groups.push({
        id: newId,
        name: this.newGroupName,
      });
      this.saveData(); // Save to localStorage
      // Reset form field
      this.newGroupName = "";
      // Close modal
      const modal = window.bootstrap.Modal.getInstance(
        document.getElementById("addGroupModal")
      );
      modal.hide();
    },
    // Delete Group and its Friends
    deleteGroup(id) {
      // Remove all friends in the group
      this.friends = this.friends.filter((friend) => friend.groupId !== id);
      // Remove the group
      this.groups = this.groups.filter((group) => group.id !== id);
      this.saveData(); // Update localStorage
    },
    // Get Friends by Group
    getFriendsByGroup(groupId) {
      return this.friends.filter((friend) => friend.groupId === groupId);
    },
  },
};
</script>

<style scoped>
.friends-view {
  position: relative;
  height: calc(100vh - 50px); /* Adjust if you have a navbar/footer */
  width: 100vw;
  padding: 20px;
  overflow-y: auto;
}

.groups-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group-card {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.friends-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

.friend-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.friend-info h3 {
  margin: 0;
}

.friend-actions {
  display: flex;
  gap: 10px;
}

.overlay-button {
  position: fixed;
  bottom: 70px; /* Place just above the navbar */
  right: 205px;
  z-index: 100;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.overlay-button-group {
  position: fixed;
  bottom: 70px; /* Above the add friend button */
  right: 110px;
  z-index: 100;
  width: 60px;
  height: 60px;
  font-size: 24px;
  background-color: #6c757d;
  border-color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.overlay-button-group:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.modal-header {
  background-color: #007bff;
  color: #fff;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-secondary {
  background-color: #6c757d;
  border: none;
}

.btn-close {
  background: none;
  border: none;
}
</style>