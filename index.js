const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let contentsEl = document.querySelector(".contents");
const likeButtonEl = document.querySelector(".like-btn");

renderPosts();

function renderPosts() {
  let contentsHtml = "";
  for (let i = 0; i < posts.length; i++) {
    contentsHtml += `
        <div class="content">
            <div class="content-header">
                <img src="./images/avatar${i + 1}.jpg" class="avatar">
                <div class="user-info">
                    <p class="name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div> 
            </div>
            <img src="./images/post${i + 1}.jpg" class="post">
                <div class="buttons">
                    <a class="btn"><img src="./images/icon-heart.png" class="btn-img post${
                      i + 1
                    }"></a>
                    <a class="btn"><img src="./images/icon-comment.png" class="btn-img"></a>
                    <a class="btn"><img src="./images/icon-dm.png" class="btn-img"></a>
                </div>
                <p class="likes">${posts[i].likes} likes</p>
                <p class="comment"> <span class="comment-owner"> ${
                  posts[i].username
                }</span> ${posts[i].comment}</p>
        </div>
        `;
  }

  contentsEl.innerHTML = contentsHtml;
}

contentsEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("post1")) {
    posts[0].likes++;
  } else if (e.target.classList.contains("post2")) {
    posts[1].likes++;
  } else if (e.target.classList.contains("post3")) {
    posts[2].likes++;
  }

  renderPosts();
});
