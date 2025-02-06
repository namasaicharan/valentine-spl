const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const container = document.getElementById("container");

let clickCount = 0;

// yesBtn.addEventListener("click", () => {
//   // Delay the message to show after a short animation.
//   setTimeout(() => {
//     document.body.innerHTML =
//       '<h1 style="color: #ff4d4d; font-size: 50px;">Awww, thank you baby!😘😘</h1>';
//   }, 300);
//   function showimage() {
//     const image = document.getElementById("imgs");
//     image.style.display = "block";
// }
// Delay for 300ms before showing the message
// });
yesBtn.addEventListener("click", () => {
  const image = document.getElementById("imgs");
  image.style.display = "block";
  question.style.display = "none";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  const getit = document.getElementById("show");
  getit.style.display = "block";
});

noBtn.addEventListener("click", () => {
  clickCount++;

  switch (clickCount) {
    case 1:
      yesBtn.style.fontSize = "60px";
      yesBtn.textContent = "Yes❤️";
      noBtn.textContent = "Are you sureee?😒";
      break;
    case 2:
      yesBtn.textContent = "Yes❤️💕";
      yesBtn.style.fontSize = "150px";
      noBtn.textContent = "think once again☹️";
      noBtn.style.fontSize = "16px";
      break;
    case 3:
      noBtn.textContent = "pakka naa☹️😕💔💔";
      yesBtn.style.fontSize = "240px";
      noBtn.style.fontSize = "14px";
      break;
    case 4:
    case 4:
      // Hide all other elements
      question.style.display = "none";
      noBtn.style.display = "none";

      // Make YES button full screen and clickable
      yesBtn.style.position = "fixed"; // Ensure it stays on top
      yesBtn.style.top = "0";
      yesBtn.style.left = "0";
      yesBtn.style.width = "100vw"; // Full viewport width
      yesBtn.style.height = "100vh"; // Full viewport height
      yesBtn.style.fontSize = "260px"; // Large text
      yesBtn.style.display = "flex";
      yesBtn.style.justifyContent = "center";
      yesBtn.style.alignItems = "center";
      yesBtn.style.margin = "0";
      yesBtn.style.border = "none";
      yesBtn.style.backgroundColor = "green"; // A nice Valentine's red ❤️
      yesBtn.style.cursor = "pointer";
      yesBtn.style.zIndex = "9999"; // Ensure it's on top of everything

      // Clear the container but keep the button working

      break;

      // yesBtn.style.width = "100vw"; // Full viewport width
      // yesBtn.style.height = "100vh"; // Full viewport height
      // yesBtn.style.fontSize = "300px";
      // yesBtn.style.display = "flex"; // Center the text inside
      // yesBtn.style.justifyContent = "center";
      // yesBtn.style.alignItems = "center";
      // yesBtn.style.margin = "0"; // Remove any default margin
      // yesBtn.style.border = "none"; // Clean border for smooth appearance
      // yesBtn.style.cursor = "pointer"; // Pointer to indicate it's clickable

      // container.innerHTML = "";
      // document.body.appendChild(yesBtn);

      // yesBtn.style.width = "90%";
      // yesBtn.style.height = "100vh";
      // yesBtn.style.fontSize = "300px";
      // container.innerHTML = "";
      // document.body.appendChild(yesBtn);
      break;
    default:
      break;
  }
});
