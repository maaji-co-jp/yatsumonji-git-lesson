const MESSAGES = {
  valueMissing: '入力してください。',
  typeMismatch: 'メールアドレスの形式で入力してください。',
};

function validateField(input) {
  const error = input.closest('.field').querySelector('.field__error');
  const key = Object.keys(MESSAGES).find((k) => input.validity[k]);
  error.textContent = key ? MESSAGES[key] : '';
  input.setAttribute('aria-invalid', String(Boolean(key)));
  return !key;
}

export function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const inputs = [...form.querySelectorAll('.field__input')];

  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = inputs.map(validateField).every(Boolean);
    if (!isValid) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    // サンプルサイトのため送信先は持たず、完了メッセージの表示のみ行う
    form.reset();
    form.querySelector('.contact-form__status').textContent =
      '送信しました。お問い合わせありがとうございます！';
  });
}
