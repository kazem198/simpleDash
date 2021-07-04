export const navigator = () => {
  if (window.innerWidth < 768) {
    //
    const btn = document.querySelector(".btn-navigation");
    btn.classList.add("d-block");

    const nav = document.querySelector(".navigation");
    nav.classList.add("before-nav");
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      //
      const btn = document.querySelector(".btn-navigation");
      btn.classList.add("d-block");

      const nav = document.querySelector(".navigation");
      nav.classList.add("before-nav");
    }
  });
};
