name1 = document.getElementById("name");
name2 = document.getElementById("name2");
white = document.getElementById("white");
circle = document.getElementById("circle");
content = document.getElementById("content");
footer = document.getElementById("footer");
chat = document.getElementById("chat");
chat.style.display = "none";
name2.style.display = "none";
content.style.display = "none";
white.style.display = "none";
footer.style.display = "none";
setTimeout(hidename2, 3000);
function hidename2() {
  name2.style.display = "flex";
  name1.style.display = "none";
}
setTimeout(function () {
  white.style.display = "block";
}, 6000);

setTimeout(function () {
  document.querySelectorAll("[loader]").forEach((element) => {
    element.style.display = "none";
  });
  content.style.display = "block";
  footer.style.display = "block";
  chat.style.display = " inline-flex";
}, 8500);

//image loader
const imageContainers = document.querySelectorAll(".img");

imageContainers.forEach((container) => {
  const image = container.querySelector("img");
  const loader = container.querySelector(".splash");

  // Listen for each image's load event
  image.onload = () => {
    loader.style.display = "none"; // Hide loader
    image.style.display = "block"; // Show image
  };
});
