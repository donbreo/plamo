<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>plamo.store - Under Construction</title>
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet">
  <style>
    body {
      background: #222;
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
    }
    .title {
      font-size: 3rem;
      margin-bottom: 1rem;
      letter-spacing: 2px;
    }
    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.8;
    }
    .gear {
      width: 100px;
      height: 100px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg class="gear" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="#ff9800" stroke-width="8" fill="none" />
      <g id="teeth">
        <rect x="48" y="5" width="4" height="20" fill="#ff9800" />
        <rect x="48" y="75" width="4" height="20" fill="#ff9800" />
        <rect x="5" y="48" width="20" height="4" fill="#ff9800" />
        <rect x="75" y="48" width="20" height="4" fill="#ff9800" />
      </g>
    </svg>
    <div class="title">plamo.store</div>
    <div class="subtitle">We're building something awesome.<br>Site is under construction.</div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
  <script>
    anime({
      targets: '.gear',
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
    anime({
      targets: '.title',
      scale: [1, 1.1, 1],
      duration: 1200,
      easing: 'easeInOutQuad',
      loop: true
    });
  </script>
</body>
</html>
