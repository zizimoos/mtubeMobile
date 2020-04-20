const moreBtn = document.querySelector(
  ".info .metadata .titleAndButton .moreBtn"
);
const title = document.querySelector(
  ".infoAndupNext .info .metadata .titleAndButton .title"
);

const moreBtnHandler = () => {
  console.log("clicked!!!");
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
};

moreBtn.addEventListener("click", moreBtnHandler);
