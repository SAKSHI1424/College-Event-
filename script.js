document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("eventList");
  const tabs = document.querySelectorAll(".tab");

  // Fergusson College Event Data
  const events = [
    { 
      title: "Club Fair - Fergusson Fest", 
      date: "2026-02-10", 
      status: "upcoming", 
      description: "Explore student clubs, cultural groups, and societies at Fergusson College.", 
      image: "images/clubfair-fergusson.jpg" 
    },
    { 
      title: "Guest Lecture: AI in 2026", 
      date: "2026-02-07", 
      status: "ongoing", 
      description: "Industry experts share insights on Artificial Intelligence in the Fergusson Auditorium.", 
      image: "images/lecture-fergusson.jpg" 
    },
    { 
      title: "Sustainability Workshop", 
      date: "2026-02-05", 
      status: "past", 
      description: "Hands-on eco-friendly practices and green campus initiatives.", 
      image: "images/sustainability-fergusson.jpg" 
    }
  ];

  // Render Events
  function renderEvents(filter) {
    eventList.innerHTML = "";
    let filtered = events.filter(ev => filter === "all" || ev.status === filter);
    if (filtered.length === 0) {
      eventList.innerHTML = "<p>No events found.</p>";
      return;
    }
    filtered.forEach(ev => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <img src="${ev.image}" alt="${ev.title}">
        <h3>${ev.title}</h3>
        <p><strong>Date:</strong> ${ev.date}</p>
        <p>${ev.description}</p>
      `;
      eventList.appendChild(card);
    });
  }

  // Default load
  renderEvents("all");

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      renderEvents(tab.dataset.filter);
    });
  });

  // Login form
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    alert(`Welcome, ${user}! (Sign-in system coming soon)`);
  });
  document.querySelector(".signup-text a").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Account creation feature coming soon!");
});
});