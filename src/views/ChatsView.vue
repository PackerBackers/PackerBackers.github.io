<template>
  <!-- Main container -->
  <div class="chat-view">
    <!-- Group Sidebar -->
    <div class="group-sidebar">
      <div class="group-list">
        <div
          class="group-card"
          v-for="group in groups"
          :key="group.id"
          :class="{ active: currentGroupId === group.id }"
          @click="selectGroup(group.id)"
        >
          <h3>{{ group.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Friend Sidebar -->
    <div class="friend-sidebar" v-if="currentGroup">
      <div class="friend-list">
        <div
          class="friend-card"
          v-for="friend in friendsInCurrentGroup"
          :key="friend.id"
          :class="{ active: currentFriendId === friend.id }"
          @click="selectChat(friend.id)"
        >
          <h4>{{ friend.name }}</h4>
        </div>
      </div>
    </div>

    <!-- Chat Content -->
    <div class="chat-content">
      <div class="chat-header">
        <h2>{{ currentFriend ? currentFriend.name : "Select a friend to chat" }}</h2>
      </div>
      <div class="chat-history">
        <div
          v-for="(message, index) in currentChat.messages"
          :key="index"
          :class="['message', message.sender]"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>
      <!-- Message Input Field -->
      <div class="message-input" v-if="currentFriend">
        <input
          type="text"
          v-model="newMessage"
          placeholder="Type your message..."
          @keyup.enter="sendMessage"
        />
        <button class="btn btn-primary" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatView",
  data() {
    return {
      groups: [],
      friends: [],
      chats: {},
      currentGroupId: null,
      currentFriendId: null,
      newMessage: "",
    };
  },
  created() {
    this.loadData();
    if (this.groups.length > 0) {
      this.currentGroupId = this.groups[0].id;
    }
  },
  computed: {
    currentGroup() {
      return this.groups.find((group) => group.id === this.currentGroupId);
    },
    friendsInCurrentGroup() {
      return this.friends.filter(
        (friend) => friend.groupId === this.currentGroupId
      );
    },
    currentFriend() {
      return this.friends.find(
        (friend) => friend.id === this.currentFriendId
      );
    },
    currentChat() {
      return this.chats[this.currentFriendId] || { messages: [] };
    },
  },
  methods: {
    loadData() {
      // Load groups and friends from localStorage
      const storedGroups = JSON.parse(localStorage.getItem("groups"));
      const storedFriends = JSON.parse(localStorage.getItem("friends"));

      if (storedGroups && storedFriends) {
        this.groups = storedGroups;
        this.friends = storedFriends;
      } else {
        // Use default data if none found
        this.groups = [
          { id: 1, name: "Family" },
          { id: 2, name: "Work" },
        ];
        this.friends = [
          { id: 1, name: "Alice", groupId: 1, isBestFriend: true },
          { id: 2, name: "Bob", groupId: 2, isBestFriend: false },
          { id: 3, name: "Charlie", groupId: 1, isBestFriend: false },
        ];
      }

      // Load chats from localStorage or initialize
      const storedChats = JSON.parse(localStorage.getItem("chats"));
      if (storedChats) {
        this.chats = storedChats;
      } else {
        // Initialize chats for each friend
        this.friends.forEach((friend) => {
          this.chats[friend.id] = {
            messages: [
              {
                sender: "bot",
                text: `Start chatting with ${friend.name}!`,
              },
            ],
          };
        });
      }
    },
    saveChats() {
      localStorage.setItem("chats", JSON.stringify(this.chats));
    },
    selectGroup(groupId) {
      this.currentGroupId = groupId;
      // Reset current friend
      this.currentFriendId = null;
    },
    selectChat(friendId) {
      this.currentFriendId = friendId;
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        // Add the new message to the current chat
        this.currentChat.messages.push({
          sender: "user",
          text: this.newMessage.trim(),
        });
        this.newMessage = "";
        // Save chats to localStorage
        this.saveChats();
        // Scroll to the bottom of the chat history
        this.$nextTick(() => {
          const chatHistory = this.$el.querySelector(".chat-history");
          chatHistory.scrollTop = chatHistory.scrollHeight;
        });
      }
    },
  },
  watch: {
    friends(newFriends) {
      // Update chats for any new friends
      newFriends.forEach((friend) => {
        if (!this.chats[friend.id]) {
          this.chats[friend.id] = {
            messages: [
              {
                sender: "bot",
                text: `Start chatting with ${friend.name}!`,
              },
            ],
          };
        }
      });
      // Remove chats for any friends that have been deleted
      Object.keys(this.chats).forEach((friendId) => {
        if (!newFriends.find((friend) => friend.id == friendId)) {
          delete this.chats[friendId];
        }
      });
      this.saveChats();
    },
  },
};
</script>

<style scoped>
/* Main container styling */
.chat-view {
  display: flex;
  height: calc(100vh - 50px); /* Adjust if you have a navbar/footer */
  width: 100vw;
  overflow: hidden;
}

/* Group Sidebar */
.group-sidebar {
  width: 200px;
  background-color: #f8f9fa;
  overflow-y: auto;
  padding: 20px;
}

.group-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.group-card {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.group-card.active {
  background-color: #e9ecef;
}

/* Friend Sidebar */
.friend-sidebar {
  width: 200px;
  background-color: #e9ecef;
  overflow-y: auto;
  padding: 20px;
}

.friend-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.friend-card {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.friend-card.active {
  background-color: #dee2e6;
}

/* Chat Content */
.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #007bff;
  color: #ffffff;
  padding: 15px;
}

.chat-history {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
}

/* Messages */
.message {
  max-width: 60%;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  word-wrap: break-word;
}

.message.user {
  background-color: #d1e7dd;
  align-self: flex-end;
}

.message.bot {
  background-color: #ffffff;
  align-self: flex-start;
}

/* Message Input */
.message-input {
  display: flex;
  padding: 15px;
  background-color: #f8f9fa;
}

.message-input input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  margin-right: 10px;
}

.message-input button {
  padding: 10px 20px;
}
</style>
