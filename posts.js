// posts.js - auto list posts
async function fetchPosts() {
  const response = await fetch('posts/posts.json');
  const posts = await response.json();
  const list = document.getElementById('postList');
  posts.sort((a,b) => new Date(b.date) - new Date(a.date));
  posts.forEach(post => {
    const li = document.createElement('li');
    li.className = 'post-item';
    li.innerHTML = `<h2><a href="posts/${post.filename}">${post.title}</a></h2>
                    <div class="post-date">${new Date(post.date).toDateString()}</div>`;
    list.appendChild(li);
  });
}
fetchPosts();
