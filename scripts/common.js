// Get the modal
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

// Get the <span> element that closes the modal
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

// When the user clicks on the button, open the modal
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

// When the user clicks on <span> (x), close the modal
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

// Click Handlers below:
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
};
// Open the modal Generic function
openModal = modal => {
  modal.style.display = "block";
};
// Close the modal Generic function
closeModal = modal => {
  modal.style.display = "none";
};
// On clicking sign up hyperlink inside sign in modal
signUpLink.onclick = function() {
  closeModal(signInModal);
  openModal(signUpModal);
};
