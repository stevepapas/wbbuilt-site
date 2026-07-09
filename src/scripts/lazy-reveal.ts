function revealImage(img: HTMLImageElement) {
  const show = () => img.classList.add('is-revealed');

  if (img.complete) {
    show();
    return;
  }

  img.addEventListener('load', show, { once: true });
  img.addEventListener('error', show, { once: true });
}

export function initLazyReveal(root: ParentNode = document) {
  const images = root.querySelectorAll<HTMLImageElement>(
    'img.lazy-reveal:not([data-lazy-reveal-init])',
  );

  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const img = entry.target as HTMLImageElement;
        observer.unobserve(img);
        revealImage(img);
      }
    },
    { rootMargin: '120px 0px', threshold: 0.01 },
  );

  images.forEach((img) => {
    img.dataset.lazyRevealInit = 'true';
    observer.observe(img);
  });
}
