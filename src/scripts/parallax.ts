let bound = false;

export function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const update = () => {
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((item) => {
      const img = item.querySelector('img');
      if (!img) return;

      const rect = item.getBoundingClientRect();
      const speed = parseFloat(item.dataset.parallaxSpeed || '0.35');
      const viewport = window.innerHeight;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const offset = (progress - 0.5) * rect.height * speed;

      img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
  };

  update();

  if (!bound) {
    bound = true;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }
}
