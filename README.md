<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>الحريفية — تطبيق الحرفيين</title>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
  :root {
    --bg-gradient: linear-gradient(135deg, #f3f6f4, #e0f2f1);
    --card: #ffffff;
    --text: #111827;
    --muted: #6b7280;
    --accent: #16a34a;
    --accent-light: #dcf7e6;
    --soft: #f3f6f4;
    --border: rgba(0,0,0,0.08);
    --shadow: 0 4px 20px rgba(0,0,0,0.06);
    --shadow-strong: 0 10px 30px rgba(2,6,23,0.08);
    --blue-bg: #4F6FFF;
    --blue-light: #6A8BFF;
  }

  [data-theme="dark"] {
    --bg-gradient: linear-gradient(135deg, #111827, #1f2937);
    --card: #1e293b;
    --text: #f9fafb;
    --muted: #9ca3af;
    --accent: #4ade80;
    --accent-light: rgba(74, 222, 128, 0.1);
    --soft: #1f2937;
    --border: rgba(255,255,255,0.1);
    --shadow: 0 4px 20px rgba(0,0,0,0.2);
    --shadow-strong: 0 10px 30px rgba(0,0,0,0.3);
    --blue-bg: #4338ca;
    --blue-light: #4f46e5;
  }

  *{box-sizing:border-box;font-family: "Tajawal", system-ui, Arial; }
  html,body{height:100%;margin:0;background:var(--bg-gradient);color:var(--text);-webkit-font-smoothing:antialiased;transition: background 0.5s ease, color 0.5s ease;}
  .app {
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding-bottom:80px;
  }

  /* Splash */
  .splash {
    width:100%;
    max-width:420px;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:24px;
    padding:28px;
    text-align:center;
    background:linear-gradient(180deg,#16a34a 0%, #0ea06b 60%);
    color:white;
    position:relative;
  }
  .logo {
    width:96px;height:96px;border-radius:24px;background:rgba(255,255,255,0.15);
    display:flex;align-items:center;justify-content:center;font-weight:800;font-size:32px;box-shadow:0 8px 28px rgba(0,0,0,0.22)
  }
  .splash h1{margin:0;font-size:24px;font-weight:800}
  .splash p{margin:0;color:rgba(255,255,255,0.92);font-size:15px;line-height:1.5}
  .btn-start{
    margin-top:8px;padding:14px 24px;border-radius:14px;border:none;background:white;color:var(--accent);
    font-weight:800;cursor:pointer;box-shadow:0 10px 24px rgba(0,0,0,0.18);
    transition: all 0.3s ease;
  }
  .btn-start:hover{ transform:scale(1.03); box-shadow:0 12px 28px rgba(0,0,0,0.22); }
  .fade-out { animation: splashHide .6s forwards; }
  @keyframes splashHide { 
    to { opacity:0; transform:translateY(-30px); } 
  }

  /* Login Page */
  .login-page {
    width:100%;
    max-width:420px;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--bg-gradient);
    padding:20px;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    opacity:1;
    transition: opacity 0.5s ease;
  }
  .login-container {
    width: 100%;
    max-width: 380px;
    background: var(--card);
    border-radius: 20px;
    padding: 30px 20px;
    box-shadow: var(--shadow);
    text-align: center;
  }
  .login-container h1 {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 10px;
  }
  .login-container p {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 16px;
    text-align: right;
  }
  .form-group label {
    display: block;
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 6px;
    font-weight: 600;
  }
  .form-group input {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    font-size: 15px;
    background: var(--soft);
    color: var(--text);
    outline: none;
    transition: border 0.3s, background 0.3s;
  }
  .form-group input:focus {
    border-color: var(--accent);
    background: var(--card);
  }
  .btn-login {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-weight: 800;
    background: var(--accent);
    color: white;
    font-size: 15px;
    transition: all 0.3s ease;
    margin-top: 20px;
  }
  .btn-login:hover { transform: scale(1.02); }
  .btn-register {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    background: transparent;
    color: var(--accent);
    margin-top: 10px;
    border: 1px solid var(--accent);
    transition: all 0.3s ease;
  }
  .btn-register:hover {
    background: rgba(22,163,74,0.06);
  }
  .login-footer {
    margin-top: 20px;
    font-size: 12px;
    color: var(--muted);
  }
  .note {
    font-size: 13px;
    color: var(--muted);
    margin-top: 12px;
  }

  /* Main UI */
  .container {
    width:100%;
    max-width:420px;
    background:transparent;
    padding:16px;
    opacity:0;
    transition: opacity 0.4s ease;
  }

  .topbar {
    display:flex;align-items:center;justify-content:space-between;padding:10px 8px;
    gap:10px; margin-bottom:8px;
  }
  .title { font-size:20px;font-weight:800;color:var(--text); display:flex;align-items:center;gap:8px; }
  .title i{ color:var(--accent); }
  .sub { font-size:13px;color:var(--muted); }

  .card {
    background:var(--card);
    border-radius:16px;
    padding:16px;
    box-shadow:var(--shadow-strong);
    border:1px solid var(--border);
    margin-bottom:16px;
    transition: transform 0.2s ease;
  }
  .card:hover { transform: translateY(-2px); }

  .roles { display:flex; gap:12px; justify-content:center; margin-top:16px }
  .role-btn {
    flex:1;padding:14px;border-radius:14px;border:none;cursor:pointer;font-weight:800;
    background:linear-gradient(180deg,var(--accent), #0f8a4d); color:white; 
    box-shadow:0 8px 24px rgba(16,163,122,0.2);
    transition: all 0.2s ease;
  }
  .role-btn:hover { transform: scale(1.02); }
  .role-btn.ghost { 
    background:transparent;color:var(--accent);border:2px solid var(--accent); 
    box-shadow: none; font-weight:700;
  }
  .role-btn.ghost:hover { background: rgba(22,163,74,0.06); }

  .page { display:none; padding:8px 0; }
  .page.active { display:block; }

  form .row { display:flex; gap:10px; }
  label{display:block;font-size:13px;color:var(--muted);margin-top:12px;margin-bottom:6px;font-weight:600}
  input[type="text"], input[type="tel"], select, textarea {
    width:100%;padding:12px;border-radius:12px;border:1px solid var(--border);
    font-size:15px;background:var(--soft);color:var(--text);outline:none;transition: border 0.3s, background 0.3s;
  }
  input[type="text"]:focus, input[type="tel"]:focus {
    border-color: var(--accent);
    background: var(--card);
  }
  input[type="file"] { padding:8px; }

  .actions { display:flex; gap:10px; margin-top:16px }
  .btn { 
    padding:14px;border-radius:12px;border:none;cursor:pointer;font-weight:800;
    background:var(--accent);color:white;flex:1;transition:all 0.3s ease;
  }
  .btn:hover { background:#0f8a4d; transform:scale(1.02); }
  .btn.ghost{ 
    background:transparent;color:var(--text);border:1px solid var(--border); 
    box-shadow:none; 
  }
  .btn.small{ padding:8px 10px; font-size:14px }

  .artisan-list { display:flex; flex-direction:column; gap:12px; margin-top:8px }
  .artisan {
    display:flex; gap:12px; align-items:center; padding:12px; background:var(--card); border-radius:12px;
    box-shadow:0 8px 24px rgba(0,0,0,0.06); border:1px solid var(--border);
    transition: transform 0.2s;
  }
  .artisan:hover { transform: translateX(4px); }
  .avatar {
    width:72px;height:72px;border-radius:14px;background:#eee;overflow:hidden;flex-shrink:0;border:2px solid var(--accent);
  }
  .avatar img{ width:100%;height:100%;object-fit:cover;display:block; }
  .meta{ flex:1; text-align:right }
  .meta h4{ margin:0;font-size:16px; color:var(--text); }
  .meta p{ margin:4px 0;color:var(--muted); font-size:13px }
  .meta .tag { display:inline-block;margin-top:6px;padding:6px 8px;border-radius:8px;background:var(--accent-light); color:var(--accent); font-weight:700; font-size:12px }

  .artisan .controls { display:flex; flex-direction:column; gap:6px; margin-left:8px }
  .stat { font-size:12px;color:var(--muted) }

  /* Call Page */
  .call-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  .video-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .video-wrapper {
    text-align: center;
  }
  .video-wrapper video {
    width: 200px;
    height: 150px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: #000;
  }
  .video-label {
    margin-top: 8px;
    font-size: 14px;
    color: var(--muted);
  }
  .call-controls {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
  .call-btn {
    padding: 14px 24px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .call-btn.end {
    background: #ef4444;
    color: white;
  }
  .call-btn.end:hover {
    background: #dc2626;
  }

  /* Chat Styles */
  .chat-header {
    padding: 12px;
    background: var(--card);
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: var(--shadow);
    text-align: center;
    font-weight: 700;
    color: var(--text);
  }
  .messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    overflow-y: auto;
    max-height: 400px;
  }
  .message {
    max-width: 70%;
    padding: 12px;
    border-radius: 16px;
    background: var(--soft);
    word-wrap: break-word;
    align-self: flex-start;
    color: var(--text);
  }
  .message.self {
    background: var(--accent-light);
    color: var(--accent);
    align-self: flex-end;
  }
  .chat-input {
    display: flex;
    gap: 10px;
    margin-top: 16px;
  }
  .chat-input input {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--soft);
    color: var(--text);
  }
  .chat-input button {
    padding: 12px 16px;
    border: none;
    border-radius: 12px;
    background: var(--accent);
    color: white;
    cursor: pointer;
  }
  .chat-input button:hover {
    background: #0f8a4d;
  }

  /* Settings Page */
  .settings-card {
    background: var(--card);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease;
  }
  .settings-card:hover { transform: translateY(-2px); }

  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
  }
  .setting-item:last-child { border-bottom: none; }

  .setting-item i {
    margin-left: 10px;
    color: var(--accent);
    font-size: 18px;
  }

  .toggle-btn {
    width: 50px;
    height: 25px;
    background: #ccc;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
  }
  .toggle-btn::after {
    content: "";
    width: 21px;
    height: 21px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 0.3s ease;
  }
  .toggle-btn.active {
    background: var(--accent);
  }
  .toggle-btn.active::after {
    transform: translateX(25px);
  }

  .profile-section {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 0;
  }
  .profile-pic {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid var(--accent);
    overflow: hidden;
    cursor: pointer;
  }
  .profile-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom {
    position:fixed; bottom:12px; left:50%; transform:translateX(-50%); width:calc(100% - 40px); max-width:420px;
    display:flex; justify-content:space-between; gap:10px; padding:8px; background:var(--card);
    border-radius:14px; box-shadow:0 12px 30px rgba(2,6,23,0.12); border:1px solid var(--border);
  }
  .nav-btn { flex:1; padding:10px 12px; border-radius:10px; border:none; cursor:pointer; background:transparent; color:var(--muted); font-weight:700 }
  .nav-btn.active { background:linear-gradient(180deg,var(--accent), #0f8a4d); color:white }

  .note{ font-size:13px;color:var(--muted); margin-top:8px }
  .center{ text-align:center }

  /* Theme Toggle Button */
  .theme-toggle {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,0.2);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  [data-theme="dark"] .theme-toggle {
    background: rgba(0,0,0,0.2);
    color: white;
  }
  .theme-toggle:hover {
    transform: scale(1.1);
  }

  @media(max-width:420px){
    .avatar{ width:64px; height:64px }
    .id-photo{ width:88px; height:88px }
    .bottom{ left:8px; right:8px; transform:none; width:auto; max-width:calc(100% - 16px) }
    .video-wrapper video {
      width: 150px;
      height: 112px;
    }
  }
</style>
</head>
<body data-theme="light">
<div class="app">

  <!-- SPLASH -->
  <section id="splash" class="splash">
    <button class="theme-toggle" id="splashThemeToggle">
      <i class="fas fa-moon"></i>
    </button>
    <div class="logo">AB</div>
    <h1>abramou يرحب بكم</h1>
    <p>تطبيق الحرفيين — أسرع طريقة تلقى الحرفي المناسب</p>
    <button id="startBtn" class="btn-start">ابدأ التطبيق</button>
  </section>

  <!-- LOGIN PAGE -->
  <div id="loginPage" class="login-page" style="display:none;">
    <div class="login-container">
      <h1>مرحباً بكم في تطبيق <span style="color:var(--accent)">Abramou</span></h1>
      <p>شكراً على حسن اختياركم! أضف معلوماتك الشخصية لتبدأ.</p>

      <div class="form-group">
        <label>الاسم الكامل</label>
        <input type="text" id="name" placeholder="أدخل اسمك الكامل">
      </div>

      <div class="form-group">
        <label>البريد الإلكتروني</label>
        <input type="email" id="email" placeholder="ex@example.com">
      </div>

      <div class="form-group">
        <label>كلمة المرور</label>
        <input type="password" id="password" placeholder="••••••••">
      </div>

      <button class="btn-login" id="btnLogin">تسجيل الدخول</button>
      <button class="btn-register" id="btnRegister">سجل حساب جديد</button>

      <div class="login-footer">
        <small>بتسجيلك، توافق على <a href="#" style="color:var(--accent)">شروط الخدمة</a></small>
      </div>
    </div>
  </div>

  <!-- MAIN -->
  <div class="container" id="main" style="display:none;">

    <div class="topbar">
      <div>
        <div class="title"><i class="fas fa-tools"></i> الحريفية</div>
        <div class="sub">للقاء الحرفيين المحترفين</div>
      </div>
      <button class="theme-toggle" id="mainThemeToggle">
        <i class="fas fa-moon"></i>
      </button>
    </div>

    <!-- role select -->
    <div class="card" id="roleCard">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:800;font-size:16px">مرحبا</div>
          <div class="sub">اختار دورك باش تبدأ</div>
        </div>
      </div>
      <div class="roles" style="margin-top:12px">
        <button id="toArt" class="role-btn">جهة الحريف</button>
        <button id="toCli" class="role-btn ghost">جهة الكليان</button>
      </div>
    </div>

    <!-- Pages -->
    <section id="pageArt" class="page">
      <div class="card">
        <h3>أضف حريف جديد</h3>
        <form id="artisanForm">
          <label>الاسم الكامل</label>
          <input type="text" id="name" required>
          <label>المهنة</label>
          <input type="text" id="craft" required>
          <label>الهاتف</label>
          <input type="tel" id="phone" required>
          <label>الصورة (اختياري)</label>
          <input type="file" id="photo" accept="image/*">
          <div class="actions">
            <button type="submit" class="btn">حفظ الحريف</button>
          </div>
        </form>
      </div>

      <div class="card">
        <h3>الحرفيين المسجلين</h3>
        <div class="artisan-list" id="artisanList">
          <!-- سيتم ملؤه ديناميكيًا -->
        </div>
      </div>
    </section>

    <section id="pageCli" class="page">
      <div class="card">
        <h3>ابحث عن حريف</h3>
        <input type="text" id="searchInput" placeholder="ابحث بالاسم أو المهنة..." style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--soft);color:var(--text);">
        <div class="artisan-list" id="searchResults">
          <!-- سيتم ملؤه عند البحث -->
        </div>
      </div>
    </section>

    <section id="chatPage" class="page">
      <div class="card">
        <div class="chat-header" id="chatHeader">اختر حريفًا للدردشة</div>
        <div class="messages" id="messages"></div>
        <div class="chat-input">
          <input type="text" id="msgInput" placeholder="اكتب رسالة..." disabled>
          <button id="sendMsg" disabled><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </section>

    <!-- صفحة المكالمات -->
    <section id="callPage" class="page">
      <div class="card">
        <h3>المكالمة الصوتية/الفيديوية</h3>
        <div class="call-container">
          <div class="video-container">
            <div class="video-wrapper">
              <video id="localVideo" autoplay muted playsinline></video>
              <div class="video-label">أنت</div>
            </div>
            <div class="video-wrapper">
              <video id="remoteVideo" autoplay playsinline></video>
              <div class="video-label" id="remoteName">الطرف الآخر</div>
            </div>
          </div>
          <div class="call-controls">
            <button id="startCall" class="call-btn">
              <i class="fas fa-video"></i> بدء المكالمة
            </button>
            <button id="endCall" class="call-btn end">
              <i class="fas fa-phone-slash"></i> إنهاء
            </button>
          </div>
          <div class="center" id="callStatus" style="color:var(--muted); margin-top: 10px;"></div>
        </div>
      </div>
    </section>

    <section id="settings" class="page">
      <div class="settings-card">
        <div class="profile-section">
          <div class="profile-pic" id="profilePic">
            <img src="https://via.placeholder.com/64?text=ص" alt="Profile">
          </div>
          <div>
            <div style="font-weight:800;" id="userNameDisplay">اسم المستخدم</div>
            <div style="color: var(--muted); font-size: 14px;">تغيير الصورة الشخصية</div>
          </div>
          <input type="file" id="picInput" style="display:none;" accept="image/*">
        </div>
      </div>

      <div class="settings-card">
        <div class="setting-item">
          <span>الوضع الليلي/النهاري</span>
          <div class="toggle-btn" id="themeToggle"></div>
        </div>
        <div class="setting-item">
          <span>الإشعارات</span>
          <div class="toggle-btn" id="notifToggle"></div>
        </div>
        <div class="setting-item">
          <span>تشغيل الأصوات</span>
          <div class="toggle-btn" id="soundToggle"></div>
        </div>
        <div class="setting-item">
          <span>إظهار ملفي للكليان</span>
          <div class="toggle-btn" id="visibilityToggle"></div>
        </div>
      </div>

      <div class="settings-card">
        <button id="clearData" class="btn ghost" style="width:100%;">مسح كل البيانات</button>
      </div>
    </section>

  </div>

  <!-- bottom nav -->
  <div class="bottom" id="bottom_nav">
    <button class="nav-btn active" data-page="pageArt">حرفيين</button>
    <button class="nav-btn" data-page="pageCli">بحث</button>
    <button class="nav-btn" data-page="chatPage">الدردشة</button>
    <button class="nav-btn" data-page="callPage">المكالمات</button>
    <button class="nav-btn" data-page="settings">الإعدادات</button>
  </div>

</div>

<script>
/* ---------- Theme Management ---------- */
const THEME_KEY = 'theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  updateThemeIcon();
}

function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

function toggleTheme() {
  const current = getTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function updateThemeIcon() {
  const isDark = getTheme() === 'dark';
  const icons = document.querySelectorAll('.theme-toggle i');
  icons.forEach(icon => {
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });
}

/* ---------- Toggle Buttons ---------- */
function setupToggle(id, callback) {
  const el = document.getElementById(id);
  let state = localStorage.getItem(id) === 'true';
  el.classList.toggle('active', state);
  el.addEventListener('click', () => {
    state = !state;
    el.classList.toggle('active', state);
    localStorage.setItem(id, state);
    if (callback) callback(state);
  });
}

/* ---------- Utilities ---------- */
const STORE = 'artisans_v2';
const USER_STORE = 'user_v1';
const CHATS_STORE = 'chats_v1';
const MESSAGES_STORE = 'messages_v1';

function load(){ 
  try{ 
    return JSON.parse(localStorage.getItem(STORE)) || []; 
  } catch(e){ 
    return []; 
  } 
}
function saveAll(list){ 
  localStorage.setItem(STORE, JSON.stringify(list)); 
}
function isVisible() {
  return localStorage.getItem('visibilityToggle') === 'true';
}
function uid(){ 
  return Date.now().toString(36) + Math.random().toString(36).slice(2,6); 
}
function readImageFile(input, cb){ 
  if(!input.files || !input.files[0]) return cb(null); 
  const fr = new FileReader(); 
  fr.onload = e => cb(e.target.result); 
  fr.readAsDataURL(input.files[0]); 
}

function updateUser(user) {
  localStorage.setItem(USER_STORE, JSON.stringify(user));
}
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_STORE)) || null;
  } catch(e) {
    return null;
  }
}

/* ---------- Profile Picture ---------- */
const profilePic = document.getElementById('profilePic');
const picInput = document.getElementById('picInput');

profilePic.addEventListener('click', () => picInput.click());

picInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    profilePic.querySelector('img').src = reader.result;
  };
  reader.readAsDataURL(file);
});

/* ---------- Chat Functions ---------- */
let activeChat = null;
let messagesStore = JSON.parse(localStorage.getItem(MESSAGES_STORE)) || {};

function loadMessages(chatId) {
  const msgDiv = document.getElementById('messages');
  msgDiv.innerHTML = '';
  const msgs = messagesStore[chatId] || [];
  msgs.forEach(m => {
    const div = document.createElement('div');
    div.className = 'message' + (m.self ? ' self' : '');
    if (m.type === 'text') {
      div.textContent = m.text;
    }
    msgDiv.appendChild(div);
    msgDiv.scrollTop = msgDiv.scrollHeight;
  });
}

function sendMessage() {
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if (!text || !activeChat) return;
  
  if (!messagesStore[activeChat]) messagesStore[activeChat] = [];
  messagesStore[activeChat].push({ self: true, type: 'text', text });
  localStorage.setItem(MESSAGES_STORE, JSON.stringify(messagesStore));
  input.value = '';
  loadMessages(activeChat);
}

function openChat(artisanId, artisanName) {
  activeChat = artisanId;
  document.getElementById('chatHeader').textContent = الدردشة مع: ${artisanName};
  document.getElementById('msgInput').disabled = false;
  document.getElementById('sendMsg').disabled = false;
  loadMessages(artisanId);
  showPage('chatPage');
}

/* ---------- Call Functions ---------- */
let localStream, remoteStream, pc;
let currentCallTarget = null;

const config = { 
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ] 
};

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const callStatus = document.getElementById('callStatus');

async function startCall(targetName) {
  try {
    callStatus.textContent = 'جاري بدء المكالمة...';
    
    localStream = await navigator.mediaDevices.getUserMedia({ 
      video: { width: 320, height: 240 }, 
      audio: true 
    });
    localVideo.srcObject = localStream;

    pc = new RTCPeerConnection(config);
    
    localStream.getTracks().forEach(track => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      remoteVideo.srcObject = event.streams[0];
      callStatus.textContent = 'المكالمة نشطة';
    };

    pc.oniceconnectionstatechange = () => {
      if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed') {
        callStatus.textContent = 'فشل الاتصال';
        endCall();
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    
    setTimeout(async () => {
      try {
        await pc.setRemoteDescription(offer);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        remoteVideo.srcObject = localStream;
        callStatus.textContent = 'المكالمة نشطة (محاكاة)';
      } catch (e) {
        callStatus.textContent = 'خطأ في المكالمة';
        endCall();
      }
    }, 1000);

  } catch (error) {
    callStatus.textContent = 'خطأ: ' + error.message;
    alert('ما كيقدرش يبدأ المكالمة: ' + error.message);
    endCall();
  }
}

function endCall() {
  if (pc) {
    pc.close();
    pc = null;
  }
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    localStream = null;
  }
  localVideo.srcObject = null;
  remoteVideo.srcObject = null;
  callStatus.textContent = '';
  currentCallTarget = null;
}

function initiateCall(artisanId, artisanName) {
  currentCallTarget = { id: artisanId, name: artisanName };
  document.getElementById('remoteName').textContent = artisanName;
  showPage('callPage');
  startCall(artisanName);
}

/* ---------- Splash -> Login ---------- */
const splash = document.getElementById('splash');
const loginPage = document.getElementById('loginPage');
const main = document.getElementById('main');

document.getElementById('startBtn').addEventListener('click', () => {
  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.style.display = 'none';
    loginPage.style.display = 'flex';
    const user = getCurrentUser();
    if (user) {
      showMainApp();
    }
  }, 600);
});

/* ---------- Theme Toggle Events ---------- */
document.getElementById('splashThemeToggle').addEventListener('click', toggleTheme);
document.getElementById('mainThemeToggle').addEventListener('click', toggleTheme);

/* ---------- Login Logic ---------- */
document.getElementById('btnLogin').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    alert('الرجاء ملء جميع الحقول!');
    return;
  }

  const user = { name, email, password, id: uid() };
  updateUser(user);
  document.getElementById('userNameDisplay').textContent = name;
  showMainApp();
});

document.getElementById('btnRegister').addEventListener('click', () => {
  const name = prompt('أدخل اسمك الكامل:');
  if (!name) return;

  const email = prompt('أدخل بريدك الإلكتروني:');
  if (!email) return;

  const password = prompt('أدخل كلمة المرور:');
  if (!password) return;

  const user = { name, email, password, id: uid() };
  updateUser(user);
  document.getElementById('userNameDisplay').textContent = name;
  showMainApp();
});

function showMainApp() {
  loginPage.style.opacity = '0';
  setTimeout(() => {
    loginPage.style.display = 'none';
    main.style.display = 'block';
    main.style.opacity = '1';
    loadArtisans();
    const user = getCurrentUser();
    if (user) {
      document.getElementById('userNameDisplay').textContent = user.name;
    }
  }, 500);
}

/* ---------- Navigation ---------- */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(.nav-btn[data-page="${pageId}"]).classList.add('active');
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.getAttribute('data-page');
    showPage(page);
    if (page === 'pageCli') {
      searchArtisans(document.getElementById('searchInput').value);
    }
  });
});

/* ---------- Role Selection ---------- */
document.getElementById('toArt').addEventListener('click', () => {
  document.getElementById('toArt').classList.add('role-btn');
  document.getElementById('toArt').classList.remove('ghost');
  document.getElementById('toCli').classList.add('ghost');
  document.getElementById('toCli').classList.remove('role-btn');
  showPage('pageArt');
});

document.getElementById('toCli').addEventListener('click', () => {
  document.getElementById('toCli').classList.add('role-btn');
  document.getElementById('toCli').classList.remove('ghost');
  document.getElementById('toArt').classList.add('ghost');
  document.getElementById('toArt').classList.remove('role-btn');
  showPage('pageCli');
  searchArtisans('');
});

/* ---------- Artisan CRUD ---------- */
function renderArtisan(artisan, container) {
  if (!isVisible() && container === document.getElementById('searchResults')) return;

  const div = document.createElement('div');
  div.className = 'artisan';
  const imgSrc = artisan.photo || 'https://via.placeholder.com/72?text=ح';
  div.innerHTML = `
    <div class="avatar"><img src="${imgSrc}" alt="${artisan.name}"></div>
    <div class="meta">
      <h4>${artisan.name}</h4>
      <p>${artisan.phone}</p>
      <span class="tag">${artisan.craft}</span>
    </div>
    <div class="controls">
      <button class="btn small" onclick="openChat('${artisan.id}', '${artisan.name}')">دردشة</button>
      <button class="btn small ghost" onclick="initiateCall('${artisan.id}', '${artisan.name}')">
        <i class="fas fa-phone"></i> اتصال
      </button>
    </div>
  `;
  container.appendChild(div);
}

function loadArtisans() {
  const artisans = load();
  const list = document.getElementById('artisanList');
  list.innerHTML = '';
  artisans.forEach(a => renderArtisan(a, list));
}

document.getElementById('artisanForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const craft = document.getElementById('craft').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  readImageFile(document.getElementById('photo'), (photo) => {
    const artisan = { id: uid(), name, craft, phone, photo };
    const list = load();
    list.push(artisan);
    saveAll(list);
    loadArtisans();
    this.reset();
    alert('تم حفظ الحريف بنجاح!');
  });
});

/* ---------- Search ---------- */
function searchArtisans(query) {
  const results = document.getElementById('searchResults');
  results.innerHTML = '';
  if (!isVisible()) {
    results.innerHTML = '<p class="center" style="color:var(--muted)">لا توجد نتائج (الحساب مخفي)</p>';
    return;
  }
  const artisans = load().filter(a => 
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.craft.toLowerCase().includes(query.toLowerCase())
  );
  if (artisans.length === 0) {
    results.innerHTML = '<p class="center" style="color:var(--muted)">ما لقيتش شي حريف</p>';
  } else {
    artisans.forEach(a => renderArtisan(a, results));
  }
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  searchArtisans(e.target.value);
});

/* ---------- Settings ---------- */
document.getElementById('clearData').addEventListener('click', () => {
  if (confirm('واش بغيتي تمسح كل البيانات؟')) {
    localStorage.removeItem(STORE);
    localStorage.removeItem(CHATS_STORE);
    localStorage.removeItem(MESSAGES_STORE);
    localStorage.removeItem(USER_STORE);
    loadArtisans();
    searchArtisans('');
    document.getElementById('messages').innerHTML = '';
    document.getElementById('chatHeader').textContent = 'اختر حريفًا للدردشة';
    document.getElementById('userNameDisplay').textContent = 'اسم المستخدم';
    document.querySelector('#profilePic img').src = 'https://via.placeholder.com/64?text=ص';
  }
});

// Event Listeners for Chat and Call
document.getElementById('sendMsg').addEventListener('click', sendMessage);
document.getElementById('startCall').addEventListener('click', () => {
  if (currentCallTarget) {
    startCall(currentCallTarget.name);
  } else {
    alert('ما كاينش هدف للمكالمة');
  }
});
document.getElementById('endCall').addEventListener('click', endCall);

// Initialize theme and toggles
setTheme(getTheme());
setupToggle('themeToggle', (state) => {
  setTheme(state ? 'dark' : 'light');
});
setupToggle('notifToggle');
setupToggle('soundToggle');
setupToggle('visibilityToggle');

// Load user data
const user = getCurrentUser();
if (user) {
  document.getElementById('userNameDisplay').textContent = user.name;
}
</script>

</body>
</html>
