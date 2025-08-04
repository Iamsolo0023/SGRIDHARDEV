// Shrinking logo on scroll
window.addEventListener("scroll", () => {
  const logoWrapper = document.querySelector(".logo-wrapper");
  if (window.scrollY > 100) {
    logoWrapper.classList.add("shrink");
  } else {
    logoWrapper.classList.remove("shrink");
  }
});

// Animate number count-up
function animateCounter(el, target) {
  let count = 0;
  const duration = 2000;
  const step = Math.ceil(target / (duration / 30));

  const counterInterval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target;
      clearInterval(counterInterval);
    } else {
      el.textContent = count;
    }
  }, 30);
}

function handleCounters() {
  const numberElements = document.querySelectorAll(".about-stats-grid .stat-box .number");
  const statsSection = document.querySelector(".about-stats-container");

  if (!statsSection || numberElements.length === 0) return;

  let hasAnimated = false;

  function checkPosition() {
    const top = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100 && !hasAnimated) {
      hasAnimated = true;
      numberElements.forEach(num => {
        const target = parseInt(num.textContent.trim());
        animateCounter(num, target);
      });
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("load", checkPosition);
}

handleCounters();
  const tabs = document.querySelectorAll('.tab');
  const grids = document.querySelectorAll('.project-grid');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update tab active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show matching grid
      const segment = tab.dataset.segment;
      grids.forEach(grid => {
        if (grid.dataset.segment === segment) {
          grid.classList.add('active');
        } else {
          grid.classList.remove('active');
        }
      });
    });
  });
