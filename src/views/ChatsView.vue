<template>
    <div class="chat-container">
      <div class="chat-sidebar">
        <ul>
          <li
            v-for="chat in chatList"
            :key="chat.id"
            :class="{ active: currentChatId === chat.id }"
            @click="selectChat(chat.id)"
          >
            {{ chat.name }}
          </li>
        </ul>
      </div>
      <div class="chat-content">
        <div class="chat-header">
          <h2>{{ currentChat.name }}</h2>
        </div>
        <div class="chat-history">
          <div
            v-for="(message, index) in currentChat.messages"
            :key="index"
            :class="message.sender"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
        <!-- Optionally, add a message input field here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentChatId: 1,
        chatList: [
          { id: 1, name: 'Chat 1' },
          { id: 2, name: 'Chat 2' },
          { id: 3, name: 'Chat 3' },
        ],
        chats: {
          1: {
            id: 1,
            name: 'Chat 1',
            messages: [
              { sender: 'user', text: 'Hi there!' },
              { sender: 'bot', text: 'Hello! How can I assist you today?' },
            ],
          },
          2: {
            id: 2,
            name: 'Chat 2',
            messages: [
              { sender: 'user', text: 'Can you tell me a joke?' },
              { sender: 'bot', text: 'Sure! Why did the tomato turn red? Because it saw the salad dressing!' },
            ],
          },
          3: {
            id: 3,
            name: 'Chat 3',
            messages: [
              { sender: 'user', text: 'What is the capital of France?' },
              { sender: 'bot', text: 'The capital of France is Paris.' },
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
    },
  };
  </script>
  
  <style>
  .chat-container {
    display: flex;
    height: 100vh;
  }
  
  .chat-sidebar {
    width: 250px;
    background-color: #f5f5f5;
  }
  
  .chat-sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .chat-sidebar li {
    padding: 15px;
    cursor: pointer;
  }
  
  .chat-sidebar li.active {
    background-color: #e0e0e0;
  }
  
  .chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    background-color: #fafafa;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }
  
  .chat-history {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
  }
  
  .chat-history .user {
    text-align: right;
    margin-bottom: 10px;
  }
  
  .chat-history .bot {
    text-align: left;
    margin-bottom: 10px;
  }
  
  .chat-history p {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    max-width: 60%;
  }
  
  .chat-history .user p {
    background-color: #dcf8c6;
  }
  
  .chat-history .bot p {
    background-color: #ececec;
  }
  
  /* Add any additional styling as needed */
  </style>
  