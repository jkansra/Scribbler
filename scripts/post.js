// Fetch data from Session storage to fetch the clicked post details
var authorNode = document.getElementById("author");
var titleNode = document.getElementById("postTitle");
var contentNode = document.getElementById("postContent");

window.onload = function() {
  authorNode.innerHTML = sessionStorage.getItem("author", author);
  titleNode.innerHTML = sessionStorage.getItem("postTitle", postTitle);
  contentNode.innerHTML = sessionStorage.getItem("postContent", postContent);
};

$(document).on("click", "#editPost", function() {
  $(".post-title")
    .prop("contenteditable", true)
    .addClass("editable");
  $(".post-content")
    .prop("contenteditable", true)
    .addClass("editable");
  $(this).html('Save <i class="fa fa-save"></i>');
  $(this).attr("id", "savePost");
});

$(document).on("click", "#savePost", function() {
  $(".post-title")
    .prop("contenteditable", false)
    .removeClass("editable");
  $(".post-content")
    .prop("contenteditable", false)
    .removeClass("editable");
  $(this).html('Edit <i class="fa fa-edit"></i>');
  $(this).attr("id", "editPost");
});
