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
  });
});
