//Toggle links active
let links = document.querySelectorAll(".con");

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("ch")) {
    links.forEach((e2) => {
      e2.classList.remove("active");
    });
    // console.log(e.target);
  }
});

links.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      links.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    }
  });
});



//Toggle button in small screen
let tg = document.querySelector(".tg");
tg.addEventListener("click", () => {
  document.body.classList.toggle("open");
});
