export function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById(toggle?.getAttribute('aria-controls') ?? '');
  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', isOpen);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // ページ内リンクで遷移してもメニューが開いたままだと本文が隠れるため閉じる
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}
