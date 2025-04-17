
const coins = document.querySelectorAll('.coin-option');
let selected = null;

coins.forEach(c => {
  c.addEventListener('click', () => {
    coins.forEach(e => e.classList.remove('selected'));
    c.classList.add('selected');
    selected = c;
  });
});

function playTypingSound() {
  const sound = document.getElementById('typingSound');
  if (sound) sound.play();
}

document.getElementById('charge').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const clickSound = document.getElementById('clickSound');
  if (clickSound) clickSound.play();

  if (!selected || !username) {
    alert('يرجى كتابة اسم المستخدم واختيار عدد العملات');
    return;
  }

  document.getElementById('successMessage').style.display = 'none';
  document.getElementById('progressSection').style.display = 'block';
  document.getElementById('progressBar').style.width = '0%';
  document.getElementById('progressText').textContent = '0%';

  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById('progressSection').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('confirmationText').innerHTML =
        'تم تحويل <strong>' + selected.dataset.amount + '</strong> عملة إلى <strong>' + username + '</strong> <img src="coin.png" class="coin-icon big" />';
      const successSound = document.getElementById('successSound');
      if (successSound) successSound.play();
    }
  }, 80);
});
