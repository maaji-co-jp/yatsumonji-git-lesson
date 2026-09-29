export function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll('.section .container');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  // JS が動かない環境で本文が非表示のまま残らないよう、隠す用のクラスも JS 側で付与する
  targets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}
