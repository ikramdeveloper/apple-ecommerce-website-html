// Cube
const cube = document.querySelector(".cube");
let x = 0;
let y = 20;
let z = 0;
let boolean = true;
let interval = "";

const selectEle = (name, func) => {
  const ele = document.querySelector(name);
  ele.addEventListener("click", func);
  return ele;
};

selectEle(".top-x-control", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

selectEle(".bottom-x-control", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

selectEle(".left-y-control", () => {
  cube.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

selectEle(".right-y-control", () => {
  cube.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

selectEle(".top-z-control", () => {
  cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${(z -= 20)}deg)`;
});

selectEle(".bottom-z-control", () => {
  cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${(z += 20)}deg)`;
});
const playPause = () => {
  if (boolean) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

const controls = document.querySelector(".controls");
controls.addEventListener("mouseover", () => {
  boolean = false;
  playPause();
});

controls.addEventListener("mouseout", () => {
  boolean = true;
  playPause();
});
// End Cube

// slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("active");

    const slideshow = document.querySelector(".slideshow");
    slideshow.appendChild(div);
  }
};

slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");

let a = 1;

const slideshow = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .active");

    div.classList.remove("active");

    if (a < divs.length) {
      div.nextElementSibling.classList.add("active");
    } else {
      divs[0].classList.add("active");
      a = 1;
    }
  }, 10000);
};

slideshow();
// End slideshow

// Macbook section
const macbookSectionContent = document.querySelector(".content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    macbookSectionContent.offsetTop + macbookSectionContent.offsetHeight / 2
  ) {
    macbookSectionContent.classList.add("active");
  }
});
// end macbook section

// watches section
const allLinks = document.querySelectorAll(
  ".watch-control, .controls a, iphone-btn"
);
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const select = (name) => {
  const ele = document.querySelector(name);
  return ele;
};
const watchBands = select(".watch-bands");
const watchCases = select(".watch-cases");
const watchTopControl = select(".watch-top-control");
const watchRightControl = select(".watch-right-control");
const watchBottomControl = select(".watch-bottom-control");
const watchLeftControl = select(".watch-left-control");

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add("hideControl");
  } else {
    watchTopControl.classList.remove("hideControl");
  }

  if (axisY === 280) {
    watchBottomControl.classList.add("hideControl");
  } else {
    watchBottomControl.classList.remove("hideControl");
  }

  if (axisX === 280) {
    watchRightControl.classList.add("hideControl");
  } else {
    watchRightControl.classList.remove("hideControl");
  }

  if (axisX === -280) {
    watchLeftControl.classList.add("hideControl");
  } else {
    watchLeftControl.classList.remove("hideControl");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});
// end watches section
