// loader.js
document.addEventListener("DOMContentLoaded", () => {
  // إنشاء عنصر اللودر وإضافته للصفحة
  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.innerHTML = `
    <div class="loader">
      <div class="dot red"></div>
      <div class="dot blue"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  // استهداف كل الروابط في الصفحة
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    // تجاهل الروابط اللي بتبدأ بـ # أو جافاسكربت
    const href = link.getAttribute('href');
    if (href.startsWith('#') || href.startsWith('javascript')) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.classList.add("show");
      const url = this.href;
      setTimeout(() => {
        window.location.href = url;
      }, 2000);
    });
  });
});
