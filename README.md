# My Angry Birds Blog (v2)

This version supports automatic post listing and date extraction.

## How to Create a New Post

1. Duplicate `posts/post-template.html`.
2. Rename it, e.g., `my-second-post.html`.
3. Open the file and paste your content where it says `<!-- Paste your article here -->`.
4. Commit your file to GitHub.
5. Update `posts/posts.json` with your new post entry:
   ```json
   { "title": "My Second Post", "filename": "my-second-post.html", "date": "2025-11-11" }
   ```
6. Push changes. The homepage will automatically update.

## Folder Structure
```
/fonts         ← place your .ttf font files
/posts         ← all post HTML files
/images        ← post images
style.css      ← main site styles
index.html     ← homepage
posts.js       ← dynamic post loader
```
