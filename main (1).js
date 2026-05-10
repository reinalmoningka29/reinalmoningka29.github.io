// ==========================================
// PERSONAL HOMEPAGE - Main JavaScript
// ==========================================

// ---- Data ----
const BLOG_POSTS = [
  {
    id: 1,
    tag: "Teknologi",
    date: "10 Mei 2025",
    readTime: "5 menit baca",
    emoji: "🤖",
    title: "Kecerdasan Buatan: Masa Depan yang Sudah Hadir",
    excerpt: "AI bukan lagi sekadar konsep futuristik. Dari asisten virtual hingga diagnosis medis, bagaimana teknologi ini mengubah cara kita bekerja dan berpikir?",
    body: `
      <p>Ketika kita berbicara tentang <strong>kecerdasan buatan (AI)</strong>, banyak orang masih membayangkan robot-robot di film fiksi ilmiah. Namun kenyataannya, AI sudah ada di sekitar kita setiap hari — mulai dari rekomendasi konten di media sosial, autocomplete saat mengetik, hingga sistem navigasi GPS.</p>

      <h2>Apa Sebenarnya AI Itu?</h2>
      <p>Kecerdasan buatan adalah cabang ilmu komputer yang bertujuan membangun sistem yang mampu melakukan tugas-tugas yang biasanya membutuhkan kecerdasan manusia. Ini mencakup pemahaman bahasa, pengenalan gambar, pengambilan keputusan, dan banyak lagi.</p>

      <h2>AI dalam Kehidupan Sehari-hari</h2>
      <p>Tanpa kita sadari, kita berinteraksi dengan AI puluhan kali setiap hari:</p>
      <ul>
        <li><strong>Filter spam email</strong> yang secara otomatis memisahkan email penting dari iklan</li>
        <li><strong>Rekomendasi produk</strong> di toko online berdasarkan riwayat belanja kita</li>
        <li><strong>Face unlock</strong> di smartphone yang mengenali wajah pemiliknya</li>
        <li><strong>Asisten virtual</strong> seperti Siri, Google Assistant, atau Alexa</li>
      </ul>

      <h2>Dampak pada Dunia Kerja</h2>
      <p>AI memang mengotomatisasi banyak pekerjaan yang sebelumnya dikerjakan manusia. Namun di saat yang sama, ia juga menciptakan jenis-jenis pekerjaan baru yang sebelumnya tidak ada. Profesi seperti <strong>AI trainer, prompt engineer, dan AI ethics consultant</strong> adalah contoh nyata lapangan kerja baru yang lahir bersamaan dengan perkembangan teknologi ini.</p>

      <h2>Tantangan dan Etika AI</h2>
      <p>Di balik semua kemajuan ini, ada pertanyaan-pertanyaan penting yang perlu kita jawab bersama: Bagaimana memastikan AI tidak bias? Siapa yang bertanggung jawab ketika AI membuat kesalahan? Bagaimana privasi kita terlindungi?</p>
      <p>Sebagai generasi yang tumbuh bersama teknologi ini, kita memiliki tanggung jawab untuk ikut membentuk bagaimana AI berkembang dan digunakan demi kebaikan bersama.</p>
    `
  },
  {
    id: 2,
    tag: "Olahraga",
    date: "25 April 2025",
    readTime: "4 menit baca",
    emoji: "⚽",
    title: "Mengapa Olahraga Penting untuk Produktivitas Belajar",
    excerpt: "Studi demi studi membuktikan bahwa aktivitas fisik secara langsung meningkatkan fungsi otak. Bagaimana kita bisa memanfaatkan ini untuk belajar lebih efektif?",
    body: `
      <p>Di tengah jadwal kuliah yang padat dan tumpukan tugas, olahraga sering kali menjadi hal pertama yang kita korbankan. Padahal, penelitian menunjukkan bahwa <strong>aktivitas fisik adalah salah satu investasi terbaik untuk kinerja akademis</strong>.</p>

      <h2>Olahraga dan Otak</h2>
      <p>Saat kita berolahraga, otak melepaskan berbagai zat kimia yang secara langsung menguntungkan proses belajar:</p>
      <ul>
        <li><strong>Endorfin</strong> — mengurangi stres dan meningkatkan mood</li>
        <li><strong>BDNF (Brain-Derived Neurotrophic Factor)</strong> — "pupuk" bagi sel-sel otak</li>
        <li><strong>Dopamin dan Serotonin</strong> — meningkatkan fokus dan motivasi</li>
      </ul>

      <h2>Berapa Lama yang Dibutuhkan?</h2>
      <p>Kabar baiknya, kamu tidak perlu menjadi atlet untuk merasakan manfaatnya. <strong>30 menit aktivitas fisik sedang</strong>, tiga sampai empat kali seminggu sudah cukup untuk meningkatkan memori dan kemampuan belajar secara signifikan.</p>

      <h2>Tips Olahraga di Tengah Kesibukan Kuliah</h2>
      <p>Tidak punya banyak waktu? Coba strategi ini:</p>
      <ul>
        <li>Jalan kaki cepat 20 menit sebelum sesi belajar intens</li>
        <li>Gunakan jeda antar kelas untuk stretching ringan</li>
        <li>Bersepeda atau berjalan ke kampus daripada naik kendaraan</li>
        <li>Bergabung dengan UKM olahraga yang jadwalnya fleksibel</li>
      </ul>

      <h2>Mulai Sekarang</h2>
      <p>Jangan tunggu sampai ada waktu luang yang sempurna. Mulai dengan langkah kecil — bahkan 10 menit berjalan kaki sudah lebih baik dari tidak sama sekali. Tubuh dan otakmu akan berterima kasih!</p>
    `
  },
  {
    id: 3,
    tag: "Seni & Desain",
    date: "12 April 2025",
    readTime: "6 menit baca",
    emoji: "🎨",
    title: "Prinsip-Prinsip Desain yang Setiap Programmer Harus Tahu",
    excerpt: "Kode yang fungsional saja tidak cukup. Memahami prinsip desain visual bisa membuat produkmu lebih profesional, lebih mudah digunakan, dan lebih menyenangkan.",
    body: `
      <p>Sebagai mahasiswa teknologi, kita sering terlalu fokus pada logika dan fungsi — dan mengabaikan tampilan. Padahal, <strong>desain yang baik adalah tentang komunikasi</strong>. Produk yang tidak enak dilihat dan sulit digunakan tidak akan bertahan lama, tidak peduli seberapa canggih kodenya.</p>

      <h2>1. Hierarki Visual</h2>
      <p>Hierarki visual adalah tentang mengarahkan mata pengguna ke informasi yang paling penting terlebih dahulu. Gunakan ukuran, bobot font, dan warna untuk menciptakan urutan kepentingan yang jelas. Judul harus menonjol. Teks pendukung harus lebih kecil dan lebih redup.</p>

      <h2>2. Prinsip CRAP</h2>
      <p>Empat prinsip dasar desain yang mudah diingat:</p>
      <ul>
        <li><strong>Contrast (Kontras)</strong> — Buat elemen penting terlihat berbeda dari yang lain</li>
        <li><strong>Repetition (Pengulangan)</strong> — Gunakan elemen yang konsisten untuk menciptakan keselarasan</li>
        <li><strong>Alignment (Perataan)</strong> — Jangan menempatkan elemen secara acak; selalu ada garis panduan</li>
        <li><strong>Proximity (Kedekatan)</strong> — Elemen yang berhubungan harus dikelompokkan bersama</li>
      </ul>

      <h2>3. White Space Itu Bukan Ruang Kosong</h2>
      <p><strong>White space (ruang kosong)</strong> adalah salah satu alat desain paling kuat yang sering diabaikan. Ruang di antara elemen membantu otak memproses informasi lebih mudah, membuat desain terasa lebih premium dan profesional.</p>

      <h2>4. Psikologi Warna</h2>
      <p>Warna mempengaruhi emosi dan persepsi pengguna. Biru menciptakan kepercayaan (banyak dipakai bank dan tech company). Merah menciptakan urgensi. Hijau diasosiasikan dengan alam dan keamanan. Pilih palet warna yang sesuai dengan pesan yang ingin kamu sampaikan.</p>

      <h2>Mulai Belajar Desain dari Mana?</h2>
      <p>Mulai dengan mengamati. Perhatikan desain aplikasi dan website yang kamu pakai setiap hari. Apa yang membuatnya nyaman? Apa yang membingungkan? Lalu coba replikasi dan eksplorasi. Desain, seperti coding, adalah skill yang diasah dengan latihan.</p>
    `
  },
  {
    id: 4,
    tag: "Tips Kuliah",
    date: "1 April 2025",
    readTime: "3 menit baca",
    emoji: "📚",
    title: "5 Strategi Belajar yang Terbukti Secara Ilmiah",
    excerpt: "Belajar keras itu perlu, tapi belajar cerdas jauh lebih penting. Berikut teknik-teknik yang didukung riset untuk memaksimalkan hasil belajarmu.",
    body: `
      <p>Berapa jam pun yang kamu habiskan membaca ulang catatan jika metodenya salah, hasilnya tidak akan optimal. Ilmu kognitif telah menemukan beberapa teknik yang <strong>terbukti secara ilmiah</strong> jauh lebih efektif dari metode belajar konvensional.</p>

      <h2>1. Spaced Repetition (Pengulangan Terjadwal)</h2>
      <p>Daripada belajar semua materi sekaligus, ulang materi dengan interval yang semakin meningkat. Hari ini, besok, 3 hari lagi, seminggu lagi. Teknik ini memanfaatkan cara kerja memori jangka panjang.</p>

      <h2>2. Active Recall (Memanggil Kembali Aktif)</h2>
      <p>Alih-alih membaca pasif, tutup bukumu dan coba ingat apa yang baru saja kamu pelajari. Buat pertanyaan dan jawab tanpa melihat catatan. Proses "berjuang mengingat" ini memperkuat koneksi di otak.</p>

      <h2>3. Teknik Pomodoro</h2>
      <p>Belajar 25 menit fokus penuh, lalu istirahat 5 menit. Setelah 4 sesi, ambil istirahat panjang 15-30 menit. Ritme ini menjaga konsentrasi dan mencegah kelelahan mental.</p>

      <h2>4. Elaborative Interrogation</h2>
      <p>Selalu tanyakan "Mengapa?" ketika mempelajari fakta baru. Menghubungkan informasi baru dengan pengetahuan yang sudah ada membuatnya jauh lebih mudah diingat.</p>

      <h2>5. Mengajar Orang Lain</h2>
      <p>Jika kamu bisa menjelaskan sesuatu dengan kata-katamu sendiri sampai orang lain mengerti, itu tandanya kamu benar-benar paham. Coba jelaskan materi ke teman atau bahkan ke dirimu sendiri di depan cermin.</p>
    `
  }
];

const GALLERY_ITEMS = [
  { id: 1, emoji: "🌄", title: "Pemandangan Alam", desc: "Keindahan alam nusantara", category: "Alam" },
  { id: 2, emoji: "🏙️", title: "Cityscape", desc: "Kota di malam hari", category: "Urban", tall: true },
  { id: 3, emoji: "📸", title: "Street Photography", desc: "Kehidupan sehari-hari", category: "Street" },
  { id: 4, emoji: "🌺", title: "Bunga Tropis", desc: "Flora khas Indonesia", category: "Alam", wide: true },
  { id: 5, emoji: "🌊", title: "Pantai Bunaken", desc: "Surga bawah laut Manado", category: "Laut" },
  { id: 6, emoji: "🏔️", title: "Gunung Lokon", desc: "Panorama Sulawesi Utara", category: "Alam", tall: true },
  { id: 7, emoji: "🌅", title: "Golden Hour", desc: "Senja di pesisir", category: "Alam" },
  { id: 8, emoji: "🎭", title: "Seni Budaya", desc: "Warisan leluhur", category: "Budaya" },
  { id: 9, emoji: "☕", title: "Coffee Vibes", desc: "Momen santai bersama kopi", category: "Lifestyle" },
];

// ==========================================
// SPA NAVIGATION
// ==========================================
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-nav]');

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.nav === pageId);
  });

  // Close mobile nav if open
  const mobileNav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (mobileNav) mobileNav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');

  // Special page init
  if (pageId === 'gallery') renderGallery();
  if (pageId === 'blog') renderBlogList();

  initReveal();
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// Hamburger
document.querySelector('.hamburger')?.addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.mobile-nav').classList.toggle('open');
});

// ==========================================
// GALLERY
// ==========================================
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = 'true';

  GALLERY_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = `gallery-item reveal${item.tall ? ' tall' : ''}${item.wide ? ' wide' : ''}`;
    el.innerHTML = `
      <div class="gallery-img-placeholder">
        <span class="img-icon">${item.emoji}</span>
        <span>${item.title}</span>
      </div>
      <div class="gallery-overlay">
        <div class="gallery-caption">
          ${item.title}
          <small>${item.category} · ${item.desc}</small>
        </div>
      </div>
    `;
    el.addEventListener('click', () => openLightbox(item));
    grid.appendChild(el);
  });
}

function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-icon').textContent = item.emoji;
  document.getElementById('lb-title').textContent = item.title;
  document.getElementById('lb-desc').textContent = `${item.category} · ${item.desc}`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox')?.addEventListener('click', function (e) {
  if (e.target === this) closeLightbox();
});

// ==========================================
// BLOG
// ==========================================
function renderBlogList() {
  const grid = document.getElementById('blog-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = 'true';

  BLOG_POSTS.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card reveal';
    card.innerHTML = `
      <div class="blog-card-thumb">${post.emoji}</div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-tag">${post.tag}</span>
          <span class="blog-date">${post.date}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <span class="blog-read-more">Baca selengkapnya →</span>
      </div>
    `;
    card.addEventListener('click', () => showPost(post.id));
    grid.appendChild(card);
  });
}

function showPost(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const listView = document.getElementById('blog-list-view');
  const postView = document.getElementById('blog-post-view');

  postView.innerHTML = `
    <article class="blog-post">
      <div class="post-back" onclick="showBlogList()">← Kembali ke Blog</div>
      <div class="post-thumb">${post.emoji}</div>
      <span class="post-tag">${post.tag}</span>
      <h1 class="post-title">${post.title}</h1>
      <div class="post-meta">
        <span>📅 ${post.date}</span>
        <span>⏱ ${post.readTime}</span>
      </div>
      <div class="post-body">${post.body}</div>
    </article>
  `;

  listView.style.display = 'none';
  postView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBlogList() {
  document.getElementById('blog-list-view').style.display = '';
  document.getElementById('blog-post-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// CONTACT FORM
// ==========================================
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;
  const btn = form.querySelector('.btn-submit');

  btn.textContent = 'Mengirim...';
  btn.disabled = true;

  // Simulate sending
  setTimeout(() => {
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1500);
});

// ==========================================
// SCROLL REVEAL
// ==========================================
function initReveal() {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 100);
}

// ==========================================
// COUNTER ANIMATION (Home stats)
// ==========================================
function animateCounters() {
  document.querySelectorAll('.stat-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 35);
  });
}

// ==========================================
// TYPED EFFECT
// ==========================================
function typeEffect(element, texts, speed = 80) {
  let textIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = texts[textIndex];
    element.textContent = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);

    if (!isDeleting) charIndex++;
    else charIndex--;

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

// ==========================================
// INIT
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  // Default page
  navigateTo('home');

  // Typed effect on hero
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    typeEffect(typedEl, ['Mahasiswa', 'Developer', 'Desainer', 'Kreator'], 90);
  }

  // Counter animation observer
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) {
    const o = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { animateCounters(); o.disconnect(); }
    }, { threshold: 0.5 });
    o.observe(statsEl);
  }

  // Initial reveal
  initReveal();
});

// Make navigate global (for inline onclick)
window.navigateTo = navigateTo;
window.closeLightbox = closeLightbox;
window.showBlogList = showBlogList;
