function toggleMenu() {
  const navbar = document.querySelector("header .navbar");
  const body = document.body;

  navbar.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

document.querySelectorAll("header .navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }

    const navbar = document.querySelector("header .navbar");
    navbar.classList.remove("active");

    const body = document.body;
    body.classList.remove("no-scroll");
  });
});

const scrollToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollToTopButton.style.opacity = "1";
    scrollToTopButton.style.pointerEvents = "auto";
  } else {
    scrollToTopButton.style.opacity = "0";
    scrollToTopButton.style.pointerEvents = "none";
  }
});
