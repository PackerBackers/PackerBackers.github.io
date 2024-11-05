<template>
  <!-- Main container -->
  <div class="chat-view">
    <!-- Sidebars (conditionally rendered) -->
    <div v-if="isSidebarVisible" class="sidebar-container">
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
          <!-- Group Chat Option -->
          <div
            class="friend-card group-chat"
            :class="{
              active:
                currentChatType === 'group' && currentGroupId === currentGroup.id,
            }"
            @click="selectGroupChat(currentGroup.id)"
          >
            <h4>Group Chat</h4>
          </div>
          <!-- Individual Friends -->
          <div
            class="friend-card"
            v-for="friend in friendsInCurrentGroup"
            :key="friend.id"
            :class="{
              active:
                currentChatType === 'friend' && currentFriendId === friend.id,
            }"
            @click="selectChat(friend.id)"
          >
            <h4>{{ friend.name }}</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Content -->
    <div class="chat-content" :class="{ fullWidth: !isSidebarVisible }">
      <!-- Chat Header -->
      <div class="chat-header">
        <button class="back-button" @click="goBack" v-if="!isSidebarVisible">
          &larr; Back
        </button>
        <h2>
          <template v-if="currentChatType === 'friend'">
            {{ currentFriend ? currentFriend.name : "Select a friend to chat" }}
          </template>
          <template v-else-if="currentChatType === 'group'">
            {{ currentGroup ? currentGroup.name : "Select a group to chat" }}
          </template>
          <template v-else>
            Select a friend or group to chat
          </template>
        </h2>
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
      <div class="message-input" v-if="currentChatType">
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
      currentChatType: null, // 'friend' or 'group'
      newMessage: "",
      isSidebarVisible: true,
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
      if (this.currentChatType === "friend") {
        return (
          this.chats["friend-" + this.currentFriendId] || { messages: [] }
        );
      } else if (this.currentChatType === "group") {
        return (
          this.chats["group-" + this.currentGroupId] || { messages: [] }
        );
      }
      return { messages: [] };
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
          this.chats["friend-" + friend.id] = {
            messages: [
              {
                sender: "bot",
                text: `Start chatting with ${friend.name}!`,
              },
            ],
          };
        });
        // Initialize chats for each group
        this.groups.forEach((group) => {
          this.chats["group-" + group.id] = {
            messages: [
              {
                sender: "bot",
                text: `Start group chat with ${group.name}!`,
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
      // Reset current friend and chat type
      this.currentFriendId = null;
      this.currentChatType = null;
    },
    selectGroupChat(groupId) {
      this.currentGroupId = groupId;
      this.currentFriendId = null;
      this.currentChatType = "group";
      this.isSidebarVisible = false; // Hide sidebar
    },
    selectChat(friendId) {
      this.currentFriendId = friendId;
      this.currentChatType = "friend";
      this.isSidebarVisible = false; // Hide sidebar
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
          if (chatHistory) {
            chatHistory.scrollTop = chatHistory.scrollHeight;
          }
        });
      }
    },
    goBack() {
      this.isSidebarVisible = true;
      this.currentChatType = null;
      this.currentFriendId = null;
    },
  },
  watch: {
    friends(newFriends) {
      // Update chats for any new friends
      newFriends.forEach((friend) => {
        if (!this.chats["friend-" + friend.id]) {
          this.chats["friend-" + friend.id] = {
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
      Object.keys(this.chats).forEach((chatKey) => {
        if (
          chatKey.startsWith("friend-") &&
          !newFriends.find(
            (friend) => friend.id == chatKey.replace("friend-", "")
          )
        ) {
          delete this.chats[chatKey];
        }
      });
      this.saveChats();
    },
    groups(newGroups) {
      // Update chats for any new groups
      newGroups.forEach((group) => {
        if (!this.chats["group-" + group.id]) {
          this.chats["group-" + group.id] = {
            messages: [
              {
                sender: "bot",
                text: `Start group chat with ${group.name}!`,
              },
            ],
          };
        }
      });
      // Remove chats for any groups that have been deleted
      Object.keys(this.chats).forEach((chatKey) => {
        if (
          chatKey.startsWith("group-") &&
          !newGroups.find(
            (group) => group.id == chatKey.replace("group-", "")
          )
        ) {
          delete this.chats[chatKey];
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

/* Sidebar Container */
.sidebar-container {
  display: flex;
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

/* Highlight Group Chat Card */
.friend-card.group-chat {
  background-color: #ffc107;
  color: #fff;
}

.friend-card.group-chat.active {
  background-color: #e0a800;
}

/* Chat Content */
.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-content.fullWidth {
  width: 100%;
}

.chat-header {
  background-color: #007bff;
  color: #ffffff;
  padding: 15px;
  display: flex;
  align-items: center;
}

.chat-header h2 {
  flex: 1;
  margin: 0;
  text-align: center;
}

.back-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
}

/* Chat History */
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
