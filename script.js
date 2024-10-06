const MeBtn = document.querySelector(".Me-btn");
const WhoBtn = document.querySelector(".Who-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Me button is clicked
MeBtn.addEventListener("click", () => {
  question.innerHTML = "it's yours Happy birthday Ourinou 😘 I Loooove you 💕 ";
  gif.src = "https://i.pinimg.com/originals/11/d2/e3/11d2e317825db2a72997d091b418a40e.gif";
});

// Make the Who button move randomly on hover
WhoBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const WhoBtnRect = WhoBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - WhoBtnRect.width;
  const maxY = wrapperRect.height - WhoBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  WhoBtn.style.left = randomX + "px";
  WhoBtn.style.top = randomY + "px";
});
