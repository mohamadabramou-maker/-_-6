 <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ابرامو - ألغاز مغربية</title>
  <style>
    /* === الخط العام === */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Tajawal', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* === خلفية الصفحة === */
    body {
      background: 
        radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(193, 39, 45, 0.03) 0%, transparent 20%),
        linear-gradient(135deg, #f9f4e8 0%, #f0e6d2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      color: #333;
      position: relative;
      overflow-x: hidden;
    }

    /* === زخرفة خلفية إضافية === */
    body::before {
      content: "";
      position: absolute;
      top: 20px;
      right: 20px;
      width: 80px;
      height: 80px;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23d4af37" stroke-width="2"/><path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="none" stroke="%23c1272d" stroke-width="1.5"/></svg>') no-repeat center;
      opacity: 0.1;
      pointer-events: none;
    }

    body::after {
      content: "";
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="none" stroke="%232e8b57" stroke-width="2" rx="10"/><circle cx="50" cy="50" r="20" fill="none" stroke="%23d4af37" stroke-width="1.5"/></svg>') no-repeat center;
      opacity: 0.1;
      pointer-events: none;
    }

    /* === الحاوية الرئيسية === */
    .container {
      background: rgba(255, 255, 255, 0.92);
      border-radius: 24px;
      padding: 30px;
      max-width: 620px;
      width: 100%;
      text-align: center;
      box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.15),
        inset 0 0 0 2px #d4af37;
      border: 2px solid #e6c229;
      position: relative;
      z-index: 5;
      margin-top: 70px;
      margin-bottom: 80px;
    }

    /* === الشريط العلوي === */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(to right, #c1272d, #d4af37);
      color: white;
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      font-size: 1rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .header-left, .header-right {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }

    /* === الشريط السفلي === */
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(to right, #2e8b57, #d4af37);
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 10px 5px;
      z-index: 10;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
      gap: 6px;
    }

    .footer-btn {
      background: rgba(255, 255, 255, 0.85);
      color: #333;
      border: none;
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.78rem;
      transition: all 0.25s ease;
      font-weight: bold;
      flex: 1;
      min-width: 70px;
      max-width: 110px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .footer-btn:hover {
      background: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      color: #c1272d;
    }

    /* === العناوين والأزرار === */
    h1 {
      font-size: 2.3rem;
      margin-bottom: 20px;
      color: #c1272d;
      text-shadow: 1px 1px 2px rgba(212, 175, 55, 0.4);
      letter-spacing: 1px;
    }

    p {
      margin: 15px 0;
      font-size: 1.15rem;
      line-height: 1.6;
      color: #444;
    }

    .btn {
      background: linear-gradient(to right, #c1272d, #a01f24);
      color: white;
      border: none;
      padding: 14px 36px;
      font-size: 1.25rem;
      border-radius: 50px;
      cursor: pointer;
      margin: 22px 0;
      transition: all 0.3s ease;
      font-weight: bold;
      box-shadow: 0 6px 15px rgba(193, 39, 45, 0.4);
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
    }

    .btn:hover {
      background: linear-gradient(to right, #d43a3a, #c1272d);
      transform: scale(1.04) rotate(1deg);
      box-shadow: 0 8px 20px rgba(193, 39, 45, 0.6);
    }

    /* === لوحة النقاط === */
    .scoreboard {
      display: flex;
      justify-content: space-between;
      background: linear-gradient(to right, #2e8b57, #3cb371);
      padding: 12px 20px;
      border-radius: 14px;
      margin-bottom: 22px;
      font-weight: bold;
      color: white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      border: 2px solid white;
    }

    /* === السؤال والخيارات === */
    .question {
      font-size: 1.5rem;
      margin: 25px 0;
      min-height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(245, 245, 245, 0.7);
      border-radius: 18px;
      padding: 20px;
      border: 2px dashed #d4af37;
      color: #2e8b57;
      font-weight: bold;
      box-shadow: inset 0 0 10px rgba(212, 175, 55, 0.2);
    }

    .options {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      margin: 22px 0;
    }

    .option {
      background: linear-gradient(to right, #f8f4e9, #ffffff);
      color: #333;
      padding: 16px;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.25s ease;
      text-align: center;
      font-weight: bold;
      border: 2px solid #e0d5b5;
      box-shadow: 0 3px 8px rgba(0,0,0,0.08);
    }

    .option:hover {
      background: linear-gradient(to right, #fff9e6, #ffebcc);
      border-color: #d4af37;
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(212, 175, 55, 0.3);
    }

    .option.correct {
      background: linear-gradient(to right, #e6f7ee, #d1f0e0);
      border-color: #2e8b57;
      color: #2e8b57;
    }

    .option.incorrect {
      background: linear-gradient(to right, #fdeaea, #f8d5d5);
      border-color: #c1272d;
      color: #c1272d;
    }

    /* === الرسائل === */
    .message {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(249, 244, 232, 0.95);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 100;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;
      backdrop-filter: blur(3px);
      border: 3px solid #d4af37;
    }

    .message.show {
      opacity: 1;
      pointer-events: all;
    }

    .message-text {
      font-size: 2.1rem;
      font-weight: bold;
      padding: 25px 45px;
      border-radius: 22px;
      text-align: center;
      max-width: 85%;
      background: white;
      box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
      border: 3px solid #d4af37;
      position: relative;
    }

    .message-text.win {
      color: #2e8b57;
      text-shadow: 0 0 10px rgba(46, 139, 87, 0.4);
    }

    .message-text.lose {
      color: #c1272d;
      text-shadow: 0 0 10px rgba(193, 39, 45, 0.4);
    }

    /* === مؤثرات الحركة === */
    .shake {
      animation: shake 0.5s ease-in-out;
    }

    .glow {
      animation: glow 1s ease-in-out;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-12px); }
      40%, 80% { transform: translateX(12px); }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px #2e8b57; }
      50% { box-shadow: 0 0 35px #2e8b57, 0 0 50px #2e8b57; }
    }

    /* === التصميم للهواتف === */
    @media (max-width: 600px) {
      .container { padding: 20px; margin-top: 80px; margin-bottom: 90px; }
      h1 { font-size: 1.9rem; }
      .message-text { font-size: 1.6rem; padding: 20px; }
      .btn { padding: 12px 28px; font-size: 1.15rem; }
      .question { font-size: 1.3rem; min-height: 80px; }
      .footer-btn { font-size: 0.7rem; padding: 5px 8px; }
    }
  </style>
</head>
<body>
  <!-- الشريط العلوي -->
  <div class="header">
    <div class="header-left">مرحبا بكم في لعبة ألغاز مغربية سهلة</div>
    <div class="header-right">مرحبا عندي في إنستغرام: <strong>lhaj_abramou</strong></div>
  </div>

  <!-- الشاشة الرئيسية -->
  <div class="container" id="homeScreen">
    <h1>ابرامو</h1>
    <p>ألغاز مغربية تختبر معرفتك بتاريخ المغرب، تراثه، وأسراره!</p>
    <button class="btn" id="startBtn">بداية المغامرة</button>
  </div>

  <!-- شاشة اللعبة -->
  <div class="container game-screen" id="gameScreen" style="display: none;">
    <div class="scoreboard">
      <div>النقاط: <span id="score">0</span></div>
      <div>المستوى: <span id="level">1</span></div>
    </div>
    <h1>العب الآن مع ابرامو وألغاز مغربية</h1>
    <div class="question" id="question"></div>
    <div class="options" id="options"></div>
  </div>

  <!-- رسالة النتيجة -->
  <div class="message" id="message">
    <div class="message-text" id="messageText"></div>
    <button class="btn" id="nextBtn">السؤال التالي</button>
  </div>

  <!-- الشريط السفلي -->
  <div class="footer">
    <button class="footer-btn" id="settingsBtn">الإعدادات</button>
    <button class="footer-btn" id="photoBtn">الصورة</button>
    <button class="footer-btn" id="shareBtn">مشاركة النتيجة</button>
    <button class="footer-btn" id="restartBtn">العودة من الأول</button>
    <button class="footer-btn" id="exitBtn">الخروج من اللعبة</button>
  </div>

  <!-- الصوتيات (مخفي) -->
  <audio id="winSound" preload="auto"></audio>
  <audio id="loseSound" preload="auto"></audio>

  <script>
    // === الأسئلة الأساسية ===
    const baseQuestions = [
      { q: "ما هو الطبق المغربي التقليدي الذي يُحضّر باللحم والخضروات والبرقوق؟", options: ["الكسكس", "الرفيسة", "الطنجية", "المسمن"], answer: 1 },
      { q: "أين يقع ضريح الشيخ محمد بن عبد الكريم الخطابي؟", options: ["وجدة", "العرائش", "أجدير", "تطوان"], answer: 2 },
      { q: "ما اسم الفن الزخرفي المغربي المصنوع من الجص المنقوش؟", options: ["الزليج", "الجبس المنقوش", "المندري", "الحدادة"], answer: 1 },
      { q: "من هو مؤسس الدولة العلوية في المغرب؟", options: ["المولى إسماعيل", "المولى رشيد", "الحسن الثاني", "اليوسفي"], answer: 1 },
      { q: "ما هي عاصمة المغرب الإدارية؟", options: ["الدار البيضاء", "مراكش", "فاس", "الرباط"], answer: 3 },
      { q: "ما اسم الزي التقليدي للرجل المغربي في المناسبات؟", options: ["الجلابة", "القفطان", "البرنوس", "السروال"], answer: 1 },
      { q: "أي مدينة مغربية تُلقب بـ'عروس الشمال'؟", options: ["طنجة", "تطوان", "شفشاون", "الحسيمة"], answer: 0 },
      { q: "ما هو الاسم المحلي لـ'الكسكس' في بعض مناطق المغرب؟", options: ["السكسو", "الطاجين", "البركوكش", "الزويتة"], answer: 0 },
      { q: "من هو ملك المغرب الحالي؟", options: ["الحسن الثاني", "محمد السادس", "عبد الله", "إسماعيل"], answer: 1 },
      { q: "ما هي اللغة الرسمية الثانية في المغرب إلى جانب العربية؟", options: ["الفرنسية", "الإسبانية", "الأمازيغية", "الإنجليزية"], answer: 2 }
    ];

    // === أسئلة إضافية عند 50 نقطة ===
    const extraQuestionsAt50 = [
      { q: "ما اسم أول جامعة في العالم؟", options: ["الأزهر", "القرويين", "الزيتونة", "النظامية"], answer: 1 },
      { q: "في أي سنة استقل المغرب؟", options: ["1956", "1962", "1947", "1954"], answer: 0 },
      { q: "ما هو الاسم الأمازيغي لمدينة مراكش؟", options: ["مراكش", "مرنيس", "أكادير", "أكْلَم"], answer: 1 },
      { q: "ما هي العملة الرسمية للمغرب؟", options: ["الدينار", "الدرهم", "الدولار", "اليورو"], answer: 1 },
      { q: "ما اسم البحر الذي يحده المغرب من الشمال؟", options: ["الأبيض المتوسط", "الأحمر", "الأسود", "الكاريبي"], answer: 0 }
    ];

    // === المرحلة النهائية (20 سؤالًا) ===
    const finalChallengeQuestions = [
      { q: "ما اسم أول جامعة في العالم؟", options: ["الأزهر", "القرويين", "الزيتونة", "النظامية"], answer: 1 },
      { q: "في أي سنة استقل المغرب؟", options: ["1956", "1962", "1947", "1954"], answer: 0 },
      { q: "ما هو الاسم الأمازيغي لمدينة مراكش؟", options: ["مراكش", "مرنيس", "أكادير", "أكْلَم"], answer: 1 },
      { q: "من هو مؤلف كتاب 'الإحاطة في أخبار غرناطة'؟", options: ["ابن خلدون", "البكري", "اللؤلؤي", "ابن الأبار"], answer: 2 },
      { q: "ما اسم الزي التقليدي للمرأة المغربية في المناسبات؟", options: ["الجلابة", "القفطان", "البرنوس", "الحاجب"], answer: 1 },
      { q: "ما هي أطول سلسلة جبلية في المغرب؟", options: ["الأطلس الكبير", "الأطلس المتوسط", "الأطلس الصغير", "جبال الريف"], answer: 0 },
      { q: "من هو الشاعر المغربي الملقب بـ'أمير الشعراء'؟", options: ["أحمد ماهر", "محمد بن إبراهيم", "مصطفى الرزرازي", "عبد الكريم الخطابي"], answer: 2 },
      { q: "ما اسم الفن الزخرفي المغربي المصنوع من الخشب المثقب؟", options: ["الزليج", "المندري", "الجبس", "الحدادة"], answer: 1 },
      { q: "ما هي المدينة التي تُعرف بـ'المدينة الزرقاء'؟", options: ["شفشاون", "تطوان", "الصويرة", "وزان"], answer: 0 },
      { q: "ما اسم الطبق المغربي الذي يُحضّر بالسميد واللبن؟", options: ["المسمن", "البغرير", "الحريرة", "السفنجة"], answer: 1 }
    ];

    // === المتغيرات ===
    let currentQuestionIndex = 0;
    let score = 0;
    let allQuestions = [...baseQuestions];
    let hasAdded50Questions = false;
    let hasAdded100Message = false;
    let isInFinalChallenge = false;
    let progressLoaded = false;

    // === العناصر ===
    const homeScreen = document.getElementById('homeScreen');
    const gameScreen = document.getElementById('gameScreen');
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const messageEl = document.getElementById('message');
    const messageTextEl = document.getElementById('messageText');
    const nextBtn = document.getElementById('nextBtn');
    const startBtn = document.getElementById('startBtn');
    const scoreEl = document.getElementById('score');
    const levelEl = document.getElementById('level');

    // === وظائف الصوت (آمنة بدون ملفات فعلية) ===
    function playSound(name) {
      // لا نستخدم ملفات صوت فعلية لتجنب الأخطاء
      // يمكن إضافتها لاحقًا إذا وُجدت
    }

    // === بدء اللعبة ===
    startBtn.addEventListener('click', () => {
      homeScreen.style.display = 'none';
      gameScreen.style.display = 'block';
      
      if (!progressLoaded) {
        progressLoaded = loadProgress();
        if (progressLoaded) {
          alert('مرحباً مجدداً! تقدمك السابق تم تحميله 🎮');
        } else {
          resetGame();
        }
      }
      loadQuestion();
    });

    function resetGame() {
      score = 0;
      currentQuestionIndex = 0;
      allQuestions = [...baseQuestions];
      hasAdded50Questions = false;
      hasAdded100Message = false;
      isInFinalChallenge = false;
      updateScoreboard();
    }

    function updateScoreboard() {
      scoreEl.textContent = score;
      levelEl.textContent = isInFinalChallenge ? "التحدي النهائي" : Math.floor(currentQuestionIndex / 3) + 1;
    }

    function loadQuestion() {
      if (currentQuestionIndex >= allQuestions.length) {
        if (!isInFinalChallenge && score >= 200) {
          startFinalChallenge();
          return;
        } else {
          showMessage(`لقد أكملت اللعبة!<br>نقاطك: ${score}`, "win");
          nextBtn.textContent = "إعادة اللعبة";
          nextBtn.onclick = () => {
            messageEl.classList.remove('show');
            resetGame();
            loadQuestion();
          };
          return;
        }
      }

      const q = allQuestions[currentQuestionIndex];
      questionEl.textContent = q.q;
      optionsEl.innerHTML = '';

      q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, q.answer, btn);
        optionsEl.appendChild(btn);
      });
    }

    function startFinalChallenge() {
      isInFinalChallenge = true;
      allQuestions = [...finalChallengeQuestions];
      currentQuestionIndex = 0;
      updateScoreboard();

      showMessage(
        `ابرامو كيقولك: سمح ليّا، ما كملتش ليك العبة...<br>` +
        `ولكن تحديت! جاي نكمل ليك.<br>` +
        `خليك معايا، والقرص على قناتنا يوتوب: <strong>abramou_live</strong>`,
        "win"
      );

      nextBtn.textContent = "ابدأ التحدي النهائي";
      nextBtn.onclick = () => {
        messageEl.classList.remove('show');
        loadQuestion();
      };
    }

    function checkAnswer(selected, correct, selectedBtn) {
      document.querySelectorAll('.option').forEach(btn => btn.style.pointerEvents = 'none');
      const allOptions = document.querySelectorAll('.option');
      allOptions[correct].classList.add('correct');

      if (selected !== correct) {
        selectedBtn.classList.add('incorrect');
        gameScreen.classList.add('shake');
        setTimeout(() => gameScreen.classList.remove('shake'), 500);
        showMessage("حاول مرة أخرى، الماء يمكن أن يعود!", "lose");
        nextBtn.onclick = () => {
          currentQuestionIndex++;
          messageEl.classList.remove('show');
          loadQuestion();
        };
      } else {
        score += 10;
        updateScoreboard();
        gameScreen.classList.add('glow');
        setTimeout(() => gameScreen.classList.remove('glow'), 1000);

        let isSpecialMessage = false;

        if (score === 50 && !hasAdded50Questions) {
          allQuestions.push(...extraQuestionsAt50);
          hasAdded50Questions = true;
          showMessage("ابرامو كيتحداك تكمل هاد المرحلة!", "win");
          isSpecialMessage = true;
        } else if (score === 100 && !hasAdded100Message) {
          hasAdded100Message = true;
          showMessage("بنتي ليا واعر... ولكن مغاديتش تقدر تفوت هاد المرحلة!", "win");
          isSpecialMessage = true;
        } else if (score >= 200 && !isInFinalChallenge) {
          showMessage("واااه! وصلتي 200 نقطة! التحدي النهائي قادم...", "win");
          isSpecialMessage = true;
        }

        if (isSpecialMessage) {
          nextBtn.onclick = () => {
            currentQuestionIndex++;
            messageEl.classList.remove('show');
            loadQuestion();
          };
        } else {
          setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
          }, 1500);
        }
      }
      saveProgress();
    }

    function showMessage(text, type) {
      messageTextEl.innerHTML = text;
      messageTextEl.className = `message-text ${type}`;
      messageEl.classList.add('show');
    }

    // === وظائف الأزرار ===
    document.getElementById('exitBtn').addEventListener('click', () => {
      alert("ملك خايف؟ يالله سير الخايف!");
      location.reload();
    });

    document.getElementById('settingsBtn').addEventListener('click', () => {
      alert("الإعدادات قادمة قريبًا!");
    });

    document.getElementById('photoBtn').addEventListener('click', () => {
      alert("هنا غادي تظهر الصورة ديال ابرامو!");
    });

    document.getElementById('restartBtn').addEventListener('click', () => {
      if (confirm("واش بغيتي تبدا من الأول؟ كل تقدمك غايتلاش!")) {
        gameScreen.style.display = 'none';
        homeScreen.style.display = 'block';
        resetGame();
        messageEl.classList.remove('show');
      }
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
      const text = `لقد حصلت على ${score} نقطة في لعبة "ابرامو"! 🇲🇦\nهل تقدر تفوتني؟\nجرب اللعبة الآن: abramou_live`;
      if (navigator.share) {
        navigator.share({ title: 'تحدي ابرامو', text }).catch(console.log);
      } else {
        navigator.clipboard.writeText(text).then(() => {
          alert('تم نسخ النتيجة! شاركها مع أصدقائك 📋');
        }).catch(() => {
          alert('فشل النسخ. حاول يدويًا:\n' + text);
        });
      }
    });

    // === حفظ وتتبع التقدم ===
    function saveProgress() {
      const progress = {
        score,
        currentQuestionIndex,
        hasAdded50Questions,
        hasAdded100Message,
        isInFinalChallenge,
        timestamp: Date.now()
      };
      localStorage.setItem('abramoProgress', JSON.stringify(progress));
    }

    function loadProgress() {
      const saved = localStorage.getItem('abramoProgress');
      if (saved) {
        const progress = JSON.parse(saved);
        if (Date.now() - progress.timestamp < 7 * 24 * 60 * 60 * 1000) {
          score = progress.score;
          currentQuestionIndex = progress.currentQuestionIndex;
          hasAdded50Questions = progress.hasAdded50Questions;
          hasAdded100Message = progress.hasAdded100Message;
          isInFinalChallenge = progress.isInFinalChallenge;
          allQuestions = [...baseQuestions];
          if (hasAdded50Questions) allQuestions.push(...extraQuestionsAt50);
          if (isInFinalChallenge) allQuestions = [...finalChallengeQuestions];
          updateScoreboard();
          return true;
        }
      }
      return false;
    }
  </script>
</body>
</html>
