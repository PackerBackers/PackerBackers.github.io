<template>
  <div class="container about-page px-3 px-lg-5 pb-5">
    <!-- Welcome Banner with Placeholder Background -->
    <div class="welcome-banner text-center text-white py-5 my-5 rounded">
      <h1 class="display-4 fw-bold">Welcome to MapMingle!</h1>
    </div>

    <div class="row gy-4">
      <!-- Section 1: Invite Friends Feature -->
      <div class="col-lg-6">
        <div class="card shadow-sm border-0 bg-light-gray h-100">
          <div class="card-body d-flex flex-row">
            <div class="text-start flex-fill">
              <h2 class="card-title fw-bold">Invite Friends & Groups</h2>
              <p class="card-text text-muted">Plan together effortlessly! Send invites to individuals, close friends, or entire groups, allowing you to tailor each event for the right audience.</p>
            </div>
            <div class="d-flex align-items-center justify-content-center animated-icon-container">
              <i class="bi bi-people-fill display-1 text-secondary animated-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Map Pinning Feature -->
      <div class="col-lg-6">
        <div class="card shadow-sm border-0 bg-light-gray h-100">
          <div class="card-body d-flex flex-row">
            <div class="text-start flex-fill">
              <h2 class="card-title fw-bold">Customize Your Event Pins</h2>
              <p class="card-text text-muted">Drop custom pins anywhere on the map! Use icons like a coffee cup for meetups, add event details like timing, activities, and more – making every plan visually engaging.</p>
            </div>
            <div class="d-flex align-items-center justify-content-center animated-icon-container">
              <i class="bi bi-geo-alt-fill display-1 text-primary animated-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Friend & Group Management -->
      <div class="col-lg-6">
        <div class="card shadow-sm border-0 bg-light-gray h-100">
          <div class="card-body d-flex flex-row">
            <div class="text-start flex-fill">
              <h2 class="card-title fw-bold">Organize Friends & Groups</h2>
              <p class="card-text text-muted">Easily create and manage groups for seamless planning. Keep your friends and activity groups organized so you can jump into planning at any time.</p>
            </div>
            <div class="d-flex align-items-center justify-content-center animated-icon-container">
              <i class="bi bi-person-badge-fill display-1 text-success animated-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Chat with Friends & Groups -->
      <div class="col-lg-6">
        <div class="card shadow-sm border-0 bg-light-gray h-100">
          <div class="card-body d-flex flex-row">
            <div class="text-start flex-fill">
              <h2 class="card-title fw-bold">Chat in Real-Time</h2>
              <p class="card-text text-muted">Stay connected with built-in chat! Message friends or groups to coordinate plans and make sure everyone’s on the same page.</p>
            </div>
            <div class="d-flex align-items-center justify-content-center animated-icon-container">
              <i class="bi bi-chat-dots-fill display-1 text-info animated-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center my-5">
      <RouterLink to="/friends">
        <button class="btn btn-primary btn-lg fw-bold shadow-sm px-4 py-3">
          Add friends to get started with MapMingle!
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AboutPage',
};
</script>

<style scoped>
/* Scoped styling for the About page */
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5rem; /* Extra space for sticky navbar */
}

/* Welcome Banner Placeholder */
.welcome-banner {
  background-color: #007bff; /* Primary Bootstrap blue */
}

/* Custom light gray background color for cards */
.bg-light-gray {
  background-color: #f8f9fa;
}

.card {
  border-radius: 1rem;
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1.1rem;
  max-width: 480px;
}

.animated-icon-container {
  flex-shrink: 0;
  margin-left: 1rem;
}

.bi {
  font-size: 4rem;
}

.animated-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Button hover effect for better interactivity */
.text-center button {
  transition: background-color 0.3s, transform 0.3s;
}

.text-center button:hover {
  background-color: #0056b3; /* Slightly darker blue on hover */
  transform: scale(1.05); /* Small scale up on hover */
}

/* Responsive Design */
@media (max-width: 576px) {
  .card-title {
    font-size: 1.3rem;
  }

  .bi {
    font-size: 3.5rem;
  }
}
</style>