const nav = document.querySelector(".nav");

if (window.scrollY > 5) {
  nav.classList.add("active");
} else if (window.scrollY < 5) {
  nav.classList.remove("active");
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    nav.classList.add("active");
  } else if (window.scrollY < 5) {
    nav.classList.remove("active");
  }
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      await sleep(1000);

      // number counter
      const counters = document.querySelectorAll(".value");
      const speed = 1000;

      counters.forEach(async (counter, index) => {
        // await sleep(index * 500);
        const animate = () => {
          const value = +counter.getAttribute("akhi");
          const data = +counter.innerText;

          const time = value / speed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 2);
          } else {
            counter.innerText = value;
          }
        };

        animate();
      });
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenEl");
hiddenElements.forEach((el) => observer.observe(el));
