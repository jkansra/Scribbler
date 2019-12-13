var authorNode = document.getElementById("author");
var titleNode = document.getElementById("postTitle");
var contentNode = document.getElementById("postContent");
var likeCounter = 0;

window.onload = function() {
  // Fetch data from Session storage to fetch the details of the clicked post
  authorNode.innerHTML = sessionStorage.getItem("author");
  titleNode.innerHTML = sessionStorage.getItem("postTitle");
  contentNode.innerHTML = sessionStorage.getItem("postContent");
};

document.addEventListener(
  "click",
  function(e) {
    if (hasClass(e.target, "saved")) {
      // edit button clicked
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleNode.setAttribute("contenteditable", true);
      titleNode.classList.add("editable");
      contentNode.setAttribute("contenteditable", true);
      contentNode.classList.add("editable");
    } else if (hasClass(e.target, "unsaved")) {
      // save button clicked
      e.target.classList.remove("unsaved");
      e.target.classList.add("saved");
      e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
      titleNode.setAttribute("contenteditable", false);
      titleNode.classList.remove("editable");
      contentNode.setAttribute("contenteditable", false);
      contentNode.classList.remove("editable");
      // Updating Session storage on Save to reflect correct data if only this page is refreshed
      sessionStorage.setItem("postTitle", titleNode.innerText);
      sessionStorage.setItem("postContent", contentNode.innerText);
    } else if (hasClass(e.target, "like-button")) {
      // Like Button Clicked
      likeCounter++;
      e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
      if (likeCounter == 1) {
        document.getElementById("likeText").innerHTML = "1 person likes this!";
      } else if (likeCounter > 1) {
        document.getElementById("likeText").innerHTML =
          likeCounter + " people like this!";
      }
    } else if (hasClass(e.target, "comment-button")) {
      // Comment Button Clicked
      var commentText = document.getElementById("commentBox").value.trim();
      if (commentText !== "") {
        // Logic to post latest comment at the top
        document.getElementById("commentsWrapper").innerHTML =
          "<p>" +
          commentText +
          "</p>" +
          document.getElementById("commentsWrapper").innerHTML;
      }
      // Emptying the value after adding the comment to All comments section
      document.getElementById("commentBox").value = "";
    }
  },
  false
);
function hasClass(elem, className) {
  return elem.classList.contains(className);
}
