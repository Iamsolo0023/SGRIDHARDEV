// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.count-up');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const suffix = counter.dataset.suffix || '';
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace(/[^\d]/g, '');
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment + suffix;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + suffix;
      }
    };

    const isVisible = () => {
      const rect = counter.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight;
    };

    const onScroll = () => {
      if (isVisible()) {
        updateCount();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // In case it's already in view
  });
}

animateCounters();
