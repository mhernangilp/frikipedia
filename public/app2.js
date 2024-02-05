$(document).ready(function() {
  $(window).scroll(function() {
    var navbar = $("#mainNav");
    if ($(window).scrollTop() > 630) {
      navbar.css("background-color", "#171d23");
    } else {
      navbar.css("background-color", "");
    }
  });
});

const NUM = 5;

let loadMoreRequests = 1;

id = 1;

async function loadMore(){

    const from = (loadMoreRequests) * NUM;
    const to = from + NUM;

    const response = await fetch(`/games?from=${from}&to=${to}`);

    const newPosts = await response.text();
  
    const PostsDiv = document.getElementById("row");

    PostsDiv.innerHTML += newPosts;

    loadMoreRequests++;
}