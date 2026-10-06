export function initActiveNav() {
  const links = document.querySelectorAll('.nav__link');
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  // 画面中央付近を横切ったセクションだけを「現在地」とみなすため、上下を大きく削った判定領域にする
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -55% 0px' },
  );

  sections.forEach((section) => observer.observe(section));
}
