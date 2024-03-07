(function () {
  const openMobileMenuButton = document.querySelector(".openMobileMenu");
  const menu = document.querySelector("ul.menu");
  const iconButton = document.querySelector(".openMobileMenu > i");
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  window.addEventListener("resize", (evt) => {
    console.log(width);
    console.log(evt);
    if (evt.srcElement.innerWidth > 901) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
      iconButton.className = "fi fi-br-bars-staggered";
    }
  });

  openMobileMenuButton.addEventListener("click", () => {
    let isMenuOpen = menu.style.display === "flex" ? true : false;

    if (isMenuOpen) {
      menu.style.display = "none";
      iconButton.className = "fi fi-br-bars-staggered";
     /*  document.body.style.overflow = "auto"; */
    } else {
      menu.style.display = "flex";
      iconButton.className = "fi fi-br-cross";
      /* document.body.style.overflow = "hidden"; */
    }
  });
})();
