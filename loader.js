document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    // تجاهل الروابط التي تفتح تبويب جديد أو ليست روابط داخلية
    if (link.target === "_blank" || link.href.startsWith("javascript:")) return;

    e.preventDefault();
    document.getElementById('loader').style.display = 'flex';

    const url = this.href;
    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  });
});
