<template>
    <div class="chat-container">
      <aside class="chat-sidebar">
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
      </aside>
      <section class="chat-content">
        <header class="chat-header">
          <h2>{{ currentChat.name }}</h2>
        </header>
        <div class="chat-history">
          <div
            v-for="(message, index) in currentChat.messages"
            :key="index"
            :class="['message', message.sender]"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
        <!-- Optionally, add a message input field here -->
      </section>
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
              {
                sender: 'bot',
                text: 'Sure! Why did the tomato turn red? Because it saw the salad dressing!',
              },
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
  
  <style scoped>
  /* Use the same CSS variables defined in App.vue */
  :root {
    --background-color: #f9f9f9;
    --sidebar-background: #ffffff;
    --content-background: #ffffff;
    --text-color: #2c3e50;
    --accent-color: #3498db;
    --font-family: 'Roboto', sans-serif;
    --border-color: #eaeaea;
  }
  
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .chat-container {
    display: flex;
    height: calc(100vh - 4rem); /* Adjust for navbar height */
    background-color: var(--background-color);
    font-family: var(--font-family);
    color: var(--text-color);
  }
  
  /* Sidebar Styles */
  .chat-sidebar {
    width: 250px;
    background-color: var(--sidebar-background);
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
  }
  
  .chat-sidebar ul {
    list-style: none;
  }
  
  .chat-sidebar li {
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .chat-sidebar li:hover,
  .chat-sidebar li.active {
    background-color: var(--accent-color);
    color: #ffffff;
  }
  
  /* Chat Content Styles */
  .chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--content-background);
  }
  
  .chat-header {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--content-background);
  }
  
  .chat-header h2 {
    font-weight: 500;
  }
  
  .chat-history {
    flex: 1;
    padding: 1rem 2rem;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 1rem;
    display: flex;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .message.bot {
    justify-content: flex-start;
  }
  
  .message p {
    max-width: 60%;
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    background-color: #ecf0f1;
    color: var(--text-color);
    line-height: 1.5;
  }
  
  .message.user p {
    background-color: var(--accent-color);
    color: #ffffff;
  }
  
  .message.bot p {
    background-color: #ecf0f1;
  }
  
  /* Scrollbar Styling */
  .chat-history::-webkit-scrollbar {
    width: 8px;
  }
  
  .chat-history::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  .chat-sidebar::-webkit-scrollbar {
    width: 8px;
  }
  
  .chat-sidebar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .chat-sidebar {
      width: 200px;
    }
  
    .chat-header,
    .chat-history {
      padding: 1rem;
    }
  }
  </style>
  