<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>شوف حظك!</title>
  <style>
    body {
      font-family: 'Tajawal', sans-serif;
      text-align: center;
      background: #fff;
      margin: 0;
      padding: 0;
    }
    .wheel-container {
      position: relative;
      margin-top: 50px;
    }
    .wheel {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 10px solid #ffc107;
      background: conic-gradient(
        #ffecb3 0deg 60deg,
        #ffe082 60deg 120deg,
        #ffd54f 120deg 180deg,
        #ffca28 180deg 240deg,
        #ffc107 240deg 300deg,
        #ffb300 300deg 360deg
      );
      transition: transform 5s cubic-bezier(0.25, 0.1, 0.25, 1);
      margin: auto;
    }
    .pointer {
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 30px solid red;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
    #spinBtn {
      margin-top: 40px;
      padding: 15px 30px;
      font-size: 20px;
      font-weight: bold;
      background: #ffc107;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    #result {
      margin-top: 20px;
      font-size: 22px;
      font-weight: bold;
      color: #444;
    }
  </style>
</head>
<body>
  <h1>شوف حظك!</h1>
  <div class="wheel-container">
    <div class="pointer"></div>
    <div class="wheel" id="wheel"></div>
  </div>
  <button id="spinBtn">شوف حظك!</button>
  <div id="result"></div>  <script>
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const spinBtn = document.getElementById('spinBtn');

    const options = [
      'ربحت 50 جنيه',
      'حظ أوفر في المرة الجاية',
      'ربحت 100 جنيه',
      'لسه فيه فرص جاية',
      'ربحت 200 جنيه',
      'جرب تاني.. ممكن تكسب!'
    ];

    spinBtn.addEventListener('click', () => {
      const rotation = 360 * 5 + Math.floor(Math.random() * 360);
      wheel.style.transform = `rotate(${rotation}deg)`;
      const selected = Math.floor(((rotation % 360) / 60)) % 6;

      setTimeout(() => {
        result.textContent = options[selected];
      }, 5200);
    });
  </script></body>
</html>
