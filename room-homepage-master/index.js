document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementsByClassName("toggle-button")[0];
  const navbarr = document.getElementsByClassName("navbarr")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  const room = document.getElementsByClassName("brand-text")[0];
  const cover = document.getElementById("cover");
  let togglerOpen = false;

  function noscroll() {
    window.scrollTo(0, 0);
  }

  toggler.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    room.classList.toggle("disappear");
    navbarr.classList.toggle("white-bg");
    cover.classList.toggle("covering");
    if (!togglerOpen) {
      toggler.classList.add("open");
      togglerOpen = true;
      window.addEventListener("scroll", noscroll);
    } else {
      toggler.classList.remove("open");
      togglerOpen = false;
      window.removeEventListener("scroll", noscroll);
    }
  });

  const header = document.querySelector(".header");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const slideImages = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg",
  ];
  const slideText = document.getElementsByClassName("pic-words");
  console.log(slideText);

  var counter = 0;

  nextBtn.addEventListener("click", () => {
    counter++;
    if (counter > 2) {
      slideText[2].style.display = "none";
      counter = 0;
    }
    header.style.background = `url(${slideImages[counter]})`;
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "center top";
    header.style.backgroundSize = "100% 100%";
    slideText[counter].style.display = "block";
    slideText[counter - 1].style.display = "none";
    slideText[counter + 1].style.display = "none";
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
      slideText[0].style.display = "none";
      counter = 2;
    }
    header.style.background = `url(${slideImages[counter]})`;
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "center top";
    header.style.backgroundSize = "100% 100%";
    slideText[counter].style.display = "block";
    slideText[counter + 1].style.display = "none";
    slideText[counter - 1].style.display = "none";
  });
});
