let artisans = JSON.parse(localStorage.getItem('artisans')) || [];

function showTab(tabNumber) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));

  document.getElementById('artisan-form').classList.toggle('active', tabNumber === 1);
  document.getElementById('search-artisans').classList.toggle('active', tabNumber === 2);
  document.getElementById(`tab${tabNumber}`).classList.add('active');

  if (tabNumber === 2) {
    renderArtisans();
  }
}

function showNotification(message, type = 'success') {
  const notif = document.getElementById('notification');
  notif.textContent = message;
  notif.className = `notification ${type} show`;
  setTimeout(() => {
    notif.classList.remove('show');
  }, 3000);
}

function toWhatsAppNumber(phone) {
  let clean = phone.replace(/\D/g, '');
  if (clean.startsWith('0')) {
    clean = '212' + clean.substring(1);
  } else if (!clean.startsWith('212')) {
    clean = '212' + clean;
  }
  return clean;
}

function getIconForProfession(profession) {
  const lower = profession.toLowerCase();
  if (lower.includes('نجار')) return 'fas fa-hammer';
  if (lower.includes('سباك') || lower.includes('سباك')) return 'fas fa-wrench';
  if (lower.includes('كهرب') || lower.includes('إلكترو')) return 'fas fa-bolt';
  if (lower.includes('حداد')) return 'fas fa-fire';
  if (lower.includes('خياط')) return 'fas fa-scissors';
  if (lower.includes('دهان') || lower.includes('بوي')) return 'fas fa-paint-roller';
  if (lower.includes('بناء') || lower.includes('بنّاء')) return 'fas fa-hard-hat';
  if (lower.includes('ميكانيك')) return 'fas fa-car';
  if (lower.includes('تكييف') || lower.includes('تكيف')) return 'fas fa-wind';
  if (lower.includes('حلاقة') || lower.includes('حلاق')) return 'fas fa-cut';
  return 'fas fa-tools';
}

document.getElementById('photoFile').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('photoUrl').value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const serviceArea = document.getElementById('serviceArea').value.trim();
  const repairs = document.getElementById('repairs').value.trim();
  const description = document.getElementById('description').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const photoUrl = document.getElementById('photoUrl').value.trim();
  const available = document.getElementById('available').checked;
  const ratingInput = document.getElementById('rating').value;
  const rating = ratingInput ? parseFloat(ratingInput) : 0;

  let finalPhoto = photoUrl;
  if (!finalPhoto) {
    finalPhoto = 'https://via.placeholder.com/150/d4af37/ffffff?text=حرفي';
  }

  const newArtisan = {
    id: Date.now(),
    name,
    profession,
    serviceArea,
    repairs,
    description,
    phone,
    photo: finalPhoto,
    available,
    rating: Math.min(5, Math.max(0, rating))
  };

  artisans.push(newArtisan);
  localStorage.setItem('artisans', JSON.stringify(artisans));

  document.getElementById('registerForm').reset();
  document.getElementById('available').checked = true;
  document.getElementById('photoUrl').value = '';

  showNotification('تم تسجيل حرفتك بنجاح! 🎉', 'success');

  if (document.getElementById('search-artisans').classList.contains('active')) {
    renderArtisans();
  }
});

function renderStars(rating) {
  if (rating <= 0) return '<i class="far fa-star"></i>'.repeat(5);
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  let stars = '<i class="fas fa-star"></i>'.repeat(full);
  if (hasHalf) stars += '<i class="fas fa-star-half-alt"></i>';
  stars += '<i class="far fa-star"></i>'.repeat(empty);
  return `<span style="color:#d4af37;">${stars}</span>`;
}

function renderArtisans() {
  const list = document.getElementById('artisansList');
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const cityFilter = document.getElementById('cityFilter').value;

  const filtered = artisans.filter(a => {
    const matchesSearch = 
      a.name.toLowerCase().includes(searchTerm) ||
      a.profession.toLowerCase().includes(searchTerm) ||
      a.repairs.toLowerCase().includes(searchTerm) ||
      a.serviceArea.toLowerCase().includes(searchTerm);
    
    const matchesCity = !cityFilter || a.serviceArea.includes(cityFilter);
    
    return matchesSearch && matchesCity;
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p style="text-align:center; color:#777; padding:1.5rem;">ما كاينش شي حرفي مسجل حالياً.</p>';
    return;
  }

  list.innerHTML = filtered.map(artisan => {
    const stars = renderStars(artisan.rating);
    const availability = artisan.available 
      ? '<span>✅ متاح</span>' 
      : '<span>❌ غير متاح</span>';
    const icon = getIconForProfession(artisan.profession);
    const contactButtons = artisan.phone ? `
      <div class="contact-buttons">
        <a href="tel:${artisan.phone}" class="btn-contact call">📞 اتصل</a>
        <a href="https://wa.me/${toWhatsAppNumber(artisan.phone)}" target="_blank" class="btn-contact whatsapp">💬 واتساب</a>
      </div>
    ` : '';

    return `
      <div class="artisan-card">
        <img src="${artisan.photo}" alt="صورة ${artisan.name}" class="artisan-photo" onerror="this.src='https://via.placeholder.com/150/d4af37/ffffff?text=حرفي'">
        <h3><i class="${icon} artisan-icon"></i> ${artisan.name}</h3>
        <p><strong>المهنة:</strong> ${artisan.profession}</p>
        <p><strong>مكان الخدمة:</strong> ${artisan.serviceArea}</p>
        <p><strong>الأعطال/الخدمات:</strong> ${artisan.repairs}</p>
        ${contactButtons}
        <div class="rating">${stars} ${artisan.rating > 0 ? `(${artisan.rating.toFixed(1)})` : ''}</div>
        <p>${availability}</p>
        ${artisan.description ? `<p style="margin-top:0.8rem; font-style:italic; color:#555;">${artisan.description}</p>` : ''}
      </div>
    `;
  }).join('');
}

document.getElementById('searchInput').addEventListener('input', renderArtisans);
document.getElementById('cityFilter').addEventListener('change', renderArtisans);

document.getElementById('exportBtn').addEventListener('click', () => {
  if (artisans.length === 0) {
    showNotification('ما كاينش شي بيانات باش تصدرها!', 'error');
    return;
  }
  const dataStr = JSON.stringify(artisans, null, 2);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([dataStr], { type: 'application/json' }));
  a.download = 'al7arafia_artisans.json';
  a.click();
});

renderArtisans();