var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var createPostBtn = document.getElementById("createPostBtn");

// Get the <span> element that closes the modal
var closeCreatePost = document.getElementById("closeCreatePost");

createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));
