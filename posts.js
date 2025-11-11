// posts.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("posts-container");

  // Fetch posts list from JSON
  fetch("./posts/posts.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load posts.json");
      return response.json();
    })
    .then(posts => {
      if (!Array.isArray(posts) || posts.length === 0) {
        container.innerHTML = "<p>No posts yet. Check back soon!</p>";
        return;
      }

      // Sort posts newest-first by date (optional)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Create and append post entries
      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
          <h2><a href="${post.url}">${post.title}</a></h2>
          <p class="date">${post.date}</p>
        `;

        container.appendChild(postDiv);
      });
    })
    .catch(err => {
      console.error("Error loading posts:", err);
      container.innerHTML = `<p style="color:red;">Error loading posts.</p>`;
    });
});

