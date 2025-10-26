document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(copyEmailBtn.dataset.email || 'saurav@sauravkafle.com.np');
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => copyEmailBtn.textContent = 'Copy email', 1500);
    });
  }
});
