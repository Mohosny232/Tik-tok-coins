document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (
      link.target === "_blank" ||
      link.href.startsWith("javascript:") ||
      link.href === "#" ||
      link.getAttribute('href') === null
    ) return;

    e.preventDefault();
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'flex';

    const url = this.href;
    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  });
});
