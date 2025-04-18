
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
payNowBtn.addEventListener('click', () => {
  payNowBtn.disabled = true;
  payNowBtn.innerText = 'جاري الدفع...';
  payNowBtn.style.color = 'white';

  const progressBar = document.getElementById('progressBar');
  const progressContainer = document.getElementById('progressContainer');
  const progressText = document.getElementById('progressText');

  progressContainer.style.display = 'block';
  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    progressBar.style.width = percent + '%';
    progressText.innerText = percent + '%';
    if (percent >= 100) {
      clearInterval(interval);
      document.getElementById('successSound').play();
      successSection.innerHTML = `
        <img src="success.gif" style="width: 100px; margin-top: 10px;" />
        <p style="font-weight:bold; font-size:18px; margin-top:10px;">
          تم تحويل العملات: ${amount}
          <img src="coin-new.png" class="coin-img" />
        </p>
      `;
      successSection.style.display = 'block';
      // يرجع الزر بعد الدفع (اختياري)
      payNowBtn.disabled = false;
      payNowBtn.innerText = 'ادفع الآن';
    }
  }, 80);
});
