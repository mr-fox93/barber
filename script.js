function toggleMenu() {
  const navbar = document.querySelector("header .navbar");
  navbar.classList.toggle("active");
}

document.querySelectorAll("header .navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
