// Asl Nurafshon - Frontend App Script
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Telegram Web App Initialization
let tg = window.Telegram ? window.Telegram.WebApp : null;
let tgUser = null;
let initData = '';

if (tg) {
    tg.ready();
    tg.expand();
    initData = tg.initData || '';
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        tgUser = tg.initDataUnsafe.user;
    }
}

// Setup common UI elements on load
document.addEventListener('DOMContentLoaded', () => {
    // Profil sahifasiga foydalanuvchi ma'lumotlarini yuklash
    const isProfilePage = window.location.pathname.includes('profil.html');
    if (isProfilePage && tgUser) {
        const nameEl = document.querySelector('.profile-name'); // Class or ID in profile.html
        const userEl = document.querySelector('.profile-username');
        const imgEl = document.querySelector('.profile-image');

        if (nameEl) nameEl.textContent = `${tgUser.first_name} ${tgUser.last_name || ''}`;
        if (userEl && tgUser.username) userEl.textContent = `@${tgUser.username}`;
        if (imgEl && tgUser.photo_url) imgEl.src = tgUser.photo_url;
    }

    // Savat va Mahsulot funksiyalari uchun API tayyorgarligi
    // (Kelgusi bosqichlarda to'liq ulanadi)
});

// Xavfsiz Fetch funksiyasi (Avtomatik Telegram malumotlarini jo'natadi)
async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers = {
        'Content-Type': 'application/json',
        'Telegram-Data': initData // Backend dagi TelegramInitDataAuthentication uchun
    };

    if (options.headers) {
        Object.assign(headers, options.headers);
    }

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
        console.error('API Error:', await response.text());
        throw new Error('Tarmoq xatosi yoki ruxsat yo`q');
    }
    return response.json();
}
