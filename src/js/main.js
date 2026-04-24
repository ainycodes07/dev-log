/**
 * SYSTEM UI CORE LOGIC
 * Includes: Keyboard Navigation, and Tag Filtering
 */



// 1. EXPLORE PAGE FILTERING
window.addEventListener('DOMContentLoaded', () => {
  const tagButtons = document.querySelectorAll('.explore-tag');
  const filterablePosts = document.querySelectorAll('.filterable-post');
  const postList = document.querySelector('.post-list');

  // Only run if we are on the Explore page
  if (postList && tagButtons.length > 0) {
    // Create the error message once
    const errorMsg = document.createElement('li');
    errorMsg.className = 'post-item system-error';
    errorMsg.style.display = 'none';
    errorMsg.innerHTML = `<span>[ <span style="color: #ff5f56;">!</span> ] Error: No matching logs found.</span>`;
    postList.appendChild(errorMsg);

    tagButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Get the tag from the data attribute
        const selectedTag = e.currentTarget.dataset.tag;
        let visibleCount = 0;
        
        // Update Active UI
        tagButtons.forEach(t => t.classList.remove('active-tag'));
        e.currentTarget.classList.add('active-tag');

        // Filter Loop
        filterablePosts.forEach(post => {
          // Get tags from the post's data-tags attribute
          const postTags = post.getAttribute('data-tags') ? post.getAttribute('data-tags').split(',') : [];
          
          if (selectedTag === 'all' || postTags.includes(selectedTag)) {
            post.style.display = 'flex';
            // Re-trigger animation
            post.style.animation = 'none';
            post.offsetHeight; 
            post.style.animation = null; 
            visibleCount++;
          } else {
            post.style.display = 'none';
          }
        });

        // Toggle Error Message
        errorMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
        if (visibleCount === 0) {
          errorMsg.style.animation = 'none';
          errorMsg.offsetHeight;
          errorMsg.style.animation = null;
        }
      });
    });
  }
});

// 2. KEYBOARD SHORTCUTS ENGINE
document.addEventListener('keydown', (e) => {
  // Prevent shortcuts if user is typing in an input (if you add search later)
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  const key = e.key.toLowerCase();

  const routes = {
    'h': '/',
    'e': '/explore/',
    'a': '/about/'
  };

  if (routes[key]) {
    window.location.href = routes[key];
  }

});