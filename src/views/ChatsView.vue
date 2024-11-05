<template>
  <!-- Main container -->
  <div class="chat-view">
    <!-- Chat Sidebar -->
    <div class="chat-sidebar">
      <div class="chat-list">
        <div
          class="chat-card"
          v-for="chat in chatList"
          :key="chat.id"
          :class="{ active: currentChatId === chat.id }"
          @click="selectChat(chat.id)"
        >
          <h3>{{ chat.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Chat Content -->
    <div class="chat-content">
      <div class="chat-header">
        <h2>{{ currentChat.name }}</h2>
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
      <div class="message-input">
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
      currentChatId: 1,
      newMessage: "",
      chatList: [
        { id: 1, name: "Chat 1" },
        { id: 2, name: "Chat 2" },
        { id: 3, name: "Chat 3" },
      ],
      chats: {
        1: {
          id: 1,
          name: "Chat 1",
          messages: [
            { sender: "user", text: "Hi there!" },
            { sender: "bot", text: "Hello! How can I assist you today?" },
          ],
        },
        2: {
          id: 2,
          name: "Chat 2",
          messages: [
            { sender: "user", text: "Can you tell me a joke?" },
            { sender: "bot", text: "Sure! Here's one for you..." },
          ],
        },
        3: {
          id: 3,
          name: "Chat 3",
          messages: [
            { sender: "user", text: "What is the capital of France?" },
            { sender: "bot", text: "The capital of France is Paris." },
          ],
        },
      },
    };
  },
  computed: {
    currentChat() {
      return this.chats[this.currentChatId];
    },
  },
  methods: {
    selectChat(chatId) {
      this.currentChatId = chatId;
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.currentChat.messages.push({
          sender: "user",
          text: this.newMessage.trim(),
        });
        this.newMessage = "";
        // Optionally, add bot response logic here
      }
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

/* Chat Sidebar */
.chat-sidebar {
  width: 250px;
  background-color: #f8f9fa;
  overflow-y: auto;
  padding: 20px;
}

.chat-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.chat-card {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.chat-card.active {
  background-color: #e9ecef;
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
