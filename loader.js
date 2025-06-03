// loader.js
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a, .withdraw-btn').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href') || link.getAttribute('onclick');
      if (
        link.target === "_blank" ||
        href?.startsWith("javascript:") ||
        href === "#" ||
        !href
      ) return;

      e.preventDefault();
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'flex';

      setTimeout(() => {
        if (link.getAttribute('href')) {
          window.location.href = link.getAttribute('href');
        } else {
          eval(link.getAttribute('onclick'));
        }
      }, 2000);
    });
  });
});
