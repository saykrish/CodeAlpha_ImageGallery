/**
 * Snapshot Image Gallery - Curated Collections
 * Categories: Landscape, Lifestyle, Banaras
 * Includes both high-speed CDN URLs and local fallback paths
 */
const SAMPLE_PHOTOS = [
  // ================= LANDSCAPE =================
  {
    id: 'landscape-1',
    title: 'Golden Horizon Valley',
    url: 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/landscape/photo-1645483556285-ab3ae9729ba9.avif',
    thumb: 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?auto=format&fit=crop&w=600&q=80',
    album: 'Landscape',
    category: 'landscape',
    tags: ['landscape', 'valley', 'golden hour', 'mountains', 'nature', 'serenity'],
    isFavorite: true,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-15',
    fileSize: '185 KB',
    description: 'Breathtaking sunlit valley framed by rolling ridges and golden morning haze.',
    views: 2480,
    likes: 412
  },
  {
    id: 'landscape-2',
    title: 'Misty Alpine Peaks',
    url: 'https://images.unsplash.com/photo-1645483802909-4254c95637fa?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/landscape/photo-1645483802909-4254c95637fa.avif',
    thumb: 'https://images.unsplash.com/photo-1645483802909-4254c95637fa?auto=format&fit=crop&w=600&q=80',
    album: 'Landscape',
    category: 'landscape',
    tags: ['landscape', 'peaks', 'clouds', 'mist', 'mountains'],
    isFavorite: false,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-18',
    fileSize: '32 KB',
    description: 'Dramatic rocky summit surrounded by floating low clouds and pure wilderness.',
    views: 1890,
    likes: 295
  },
  {
    id: 'landscape-3',
    title: 'Serene Wilderness Reflections',
    url: 'https://images.unsplash.com/premium_photo-1661963649278-db5e2697d0be?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/landscape/premium_photo-1661963649278-db5e2697d0be.avif',
    thumb: 'https://images.unsplash.com/premium_photo-1661963649278-db5e2697d0be?auto=format&fit=crop&w=600&q=80',
    album: 'Landscape',
    category: 'landscape',
    tags: ['landscape', 'lake', 'water', 'reflection', 'forest'],
    isFavorite: true,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-22',
    fileSize: '146 KB',
    description: 'Glass-like lake reflections mirroring rugged peaks beneath a quiet sky.',
    views: 3120,
    likes: 580
  },
  {
    id: 'landscape-4',
    title: 'Dramatic Canyon Twilight',
    url: 'https://images.unsplash.com/premium_photo-1697729634472-bb82561ef296?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/landscape/premium_photo-1697729634472-bb82561ef296.avif',
    thumb: 'https://images.unsplash.com/premium_photo-1697729634472-bb82561ef296?auto=format&fit=crop&w=600&q=80',
    album: 'Landscape',
    category: 'landscape',
    tags: ['landscape', 'canyon', 'sunset', 'desert', 'rocks'],
    isFavorite: false,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-25',
    fileSize: '74 KB',
    description: 'Sculptured geological formations catching the warm ambient glow of sundown.',
    views: 2130,
    likes: 340
  },

  // ================= LIFESTYLE =================
  {
    id: 'lifestyle-1',
    title: 'Quiet Morning Coffee',
    url: 'https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/lifestyle/photo-1564216329574-c839d4eedb1b.avif',
    thumb: 'https://images.unsplash.com/photo-1564216329574-c839d4eedb1b?auto=format&fit=crop&w=600&q=80',
    album: 'Lifestyle',
    category: 'lifestyle',
    tags: ['lifestyle', 'coffee', 'morning', 'cozy', 'calm'],
    isFavorite: true,
    aspectRatio: 'portrait',
    resolution: 'High Resolution',
    date: '2026-10-26',
    fileSize: '16 KB',
    description: 'Warm, peaceful morning coffee rituals bathed in natural ambient window light.',
    views: 1980,
    likes: 385
  },
  {
    id: 'lifestyle-2',
    title: 'Modern Creative Workspace',
    url: 'https://images.unsplash.com/photo-1630558673281-46d2d315e235?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/lifestyle/photo-1630558673281-46d2d315e235.avif',
    thumb: 'https://images.unsplash.com/photo-1630558673281-46d2d315e235?auto=format&fit=crop&w=600&q=80',
    album: 'Lifestyle',
    category: 'lifestyle',
    tags: ['lifestyle', 'workspace', 'minimalism', 'creative', 'interior'],
    isFavorite: false,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-28',
    fileSize: '118 KB',
    description: 'Organized minimalist workstation surrounded by lush greenery and clean design.',
    views: 2640,
    likes: 470
  },
  {
    id: 'lifestyle-3',
    title: 'Authentic Moments',
    url: 'https://images.unsplash.com/premium_photo-1674327105074-46dd8319164b?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/lifestyle/premium_photo-1674327105074-46dd8319164b.avif',
    thumb: 'https://images.unsplash.com/premium_photo-1674327105074-46dd8319164b?auto=format&fit=crop&w=600&q=80',
    album: 'Lifestyle',
    category: 'lifestyle',
    tags: ['lifestyle', 'candid', 'people', 'outdoor', 'moments'],
    isFavorite: true,
    aspectRatio: 'portrait',
    resolution: 'High Resolution',
    date: '2026-10-30',
    fileSize: '16 KB',
    description: 'Unfiltered candid moments capturing spontaneous joy and natural connection.',
    views: 2210,
    likes: 510
  },

  // ================= BANARAS =================
  {
    id: 'banaras-1',
    title: 'Historic Ghats of Varanasi',
    url: 'https://images.unsplash.com/photo-1598761713499-7761062822c9?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/banaras/photo-1598761713499-7761062822c9.avif',
    thumb: 'https://images.unsplash.com/photo-1598761713499-7761062822c9?auto=format&fit=crop&w=600&q=80',
    album: 'Banaras',
    category: 'banaras',
    tags: ['banaras', 'varanasi', 'ghats', 'ganga', 'heritage', 'spiritual'],
    isFavorite: true,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-10-31',
    fileSize: '16 KB',
    description: 'Timeless stone stairways along the holy Ganga River reflecting centuries of devotion.',
    views: 3890,
    likes: 820
  },
  {
    id: 'banaras-2',
    title: 'Evening Ganga Aarti Glow',
    url: 'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/banaras/photo-1599831069477-b2acdc0bcb91.avif',
    thumb: 'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?auto=format&fit=crop&w=600&q=80',
    album: 'Banaras',
    category: 'banaras',
    tags: ['banaras', 'varanasi', 'aarti', 'spiritual', 'fire', 'lamps'],
    isFavorite: true,
    aspectRatio: 'portrait',
    resolution: 'High Resolution',
    date: '2026-11-01',
    fileSize: '18 KB',
    description: 'Enchanting evening prayer ritual with soaring brass lamps illuminating the riverbank.',
    views: 4520,
    likes: 960
  },
  {
    id: 'banaras-3',
    title: 'Architectural Heritage of Kashi',
    url: 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/banaras/photo-1645483556285-ab3ae9729ba9.avif',
    thumb: 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?auto=format&fit=crop&w=600&q=80',
    album: 'Banaras',
    category: 'banaras',
    tags: ['banaras', 'architecture', 'heritage', 'temples', 'kashi'],
    isFavorite: false,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-11-01',
    fileSize: '102 KB',
    description: 'Intricate sandstone facades and ancient riverside temple spires standing tall.',
    views: 2840,
    likes: 490
  },
  {
    id: 'banaras-4',
    title: 'Morning Boats on the Ganges',
    url: 'https://images.unsplash.com/photo-1709572421555-1614046a51c1?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/banaras/photo-1709572421555-1614046a51c1.avif',
    thumb: 'https://images.unsplash.com/photo-1709572421555-1614046a51c1?auto=format&fit=crop&w=600&q=80',
    album: 'Banaras',
    category: 'banaras',
    tags: ['banaras', 'boats', 'river', 'ganges', 'sunrise'],
    isFavorite: true,
    aspectRatio: 'landscape',
    resolution: 'High Resolution',
    date: '2026-11-02',
    fileSize: '32 KB',
    description: 'Traditional wooden boats floating in soft morning mist across the holy river.',
    views: 3410,
    likes: 670
  },
  {
    id: 'banaras-5',
    title: 'Lanes of Ancient Kashi',
    url: 'https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?auto=format&fit=crop&w=1200&q=80',
    localUrl: 'images/banaras/photo-1717323821798-8cee2f6826ff.avif',
    thumb: 'https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?auto=format&fit=crop&w=600&q=80',
    album: 'Banaras',
    category: 'banaras',
    tags: ['banaras', 'lanes', 'street', 'culture', 'heritage'],
    isFavorite: false,
    aspectRatio: 'portrait',
    resolution: 'High Resolution',
    date: '2026-11-02',
    fileSize: '45 KB',
    description: 'Atmospheric narrow alleys steeped in music, incense, history, and vibrant life.',
    views: 2950,
    likes: 530
  }
];

const INITIAL_ALBUMS = [
  {
    id: 'landscape',
    name: 'Landscape',
    description: 'Grand mountain vistas, tranquil lakes, deep valleys, and dramatic desert canyons.',
    cover: 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?auto=format&fit=crop&w=600&q=80',
    color: '#438B75'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    description: 'Cozy everyday routines, creative aesthetic workspaces, and authentic candid memories.',
    cover: 'https://images.unsplash.com/photo-1630558673281-46d2d315e235?auto=format&fit=crop&w=600&q=80',
    color: '#FF896F'
  },
  {
    id: 'banaras',
    name: 'Banaras',
    description: 'Sacred riverfront ghats, mystical evening Ganga Aarti, wooden boats, and timeless Kashi.',
    cover: 'https://images.unsplash.com/photo-1598761713499-7761062822c9?auto=format&fit=crop&w=600&q=80',
    color: '#E07A5F'
  }
];


/**
 * Snapshot Image Gallery - Storage & Database Manager
 * Uses IndexedDB with localStorage fallback
 */

const DB_NAME = 'SnapshotGalleryDB_v2';
const DB_VERSION = 1;
const PHOTO_STORE = 'photos';
const ALBUM_STORE = 'albums';
const THEME_KEY = 'snapshot_theme';

class GalleryDB {
  constructor() {
    this.db = null;
    this.isReady = false;
    this.readyPromise = null;
  }

  async init() {
    if (this.readyPromise) return this.readyPromise;

    this.readyPromise = new Promise((resolve) => {
      // Clear legacy storage keys if present
      try {
        localStorage.removeItem('lumina_photos');
        localStorage.removeItem('lumina_albums');
        localStorage.removeItem('lumora_photos');
        localStorage.removeItem('lumora_albums');
      } catch (e) {}

      if (!window.indexedDB) {
        this.initFallbackStorage();
        this.isReady = true;
        resolve(this);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(PHOTO_STORE)) {
          const photoStore = db.createObjectStore(PHOTO_STORE, { keyPath: 'id' });
          photoStore.createIndex('album', 'album', { unique: false });
          photoStore.createIndex('category', 'category', { unique: false });
          photoStore.createIndex('isFavorite', 'isFavorite', { unique: false });
        }
        if (!db.objectStoreNames.contains(ALBUM_STORE)) {
          db.createObjectStore(ALBUM_STORE, { keyPath: 'id' });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        this.isReady = true;
        await this.seedInitialDataIfEmpty();
        resolve(this);
      };

      request.onerror = (event) => {
        console.error('IndexedDB init error:', event.target.error);
        this.initFallbackStorage();
        this.isReady = true;
        resolve(this);
      };
    });

    return this.readyPromise;
  }

  initFallbackStorage() {
    this.db = null;
    if (!localStorage.getItem('snapshot_photos')) {
      localStorage.setItem('snapshot_photos', JSON.stringify(SAMPLE_PHOTOS));
    }
    if (!localStorage.getItem('snapshot_albums')) {
      localStorage.setItem('snapshot_albums', JSON.stringify(INITIAL_ALBUMS));
    }
  }

  async seedInitialDataIfEmpty() {
    if (!this.db) return;

    const photos = await this.getAllPhotos();
    // Check if store is empty or still has old non-landscape/lifestyle/banaras photos
    const hasNewPhotos = photos.some(p => ['landscape', 'lifestyle', 'banaras'].includes((p.category || '').toLowerCase()));
    
    if (photos.length === 0 || !hasNewPhotos) {
      const tx = this.db.transaction([PHOTO_STORE, ALBUM_STORE], 'readwrite');
      const photoStore = tx.objectStore(PHOTO_STORE);
      const albumStore = tx.objectStore(ALBUM_STORE);

      await new Promise(r => {
        const clearReq = photoStore.clear();
        clearReq.onsuccess = () => r();
      });

      await new Promise(r => {
        const clearReq = albumStore.clear();
        clearReq.onsuccess = () => r();
      });

      SAMPLE_PHOTOS.forEach(p => photoStore.put(p));
      INITIAL_ALBUMS.forEach(a => albumStore.put(a));

      return new Promise((resolve) => {
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      });
    }
  }

  async getAllPhotos() {
    if (!this.db) {
      try {
        return JSON.parse(localStorage.getItem('snapshot_photos') || '[]');
      } catch (e) {
        return SAMPLE_PHOTOS;
      }
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(PHOTO_STORE, 'readonly');
      const store = tx.objectStore(PHOTO_STORE);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  async getPhotoById(id) {
    if (!this.db) {
      const photos = await this.getAllPhotos();
      return photos.find(p => p.id === id);
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(PHOTO_STORE, 'readonly');
      const store = tx.objectStore(PHOTO_STORE);
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async addPhoto(photo) {
    if (!photo.id) photo.id = 'photo-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    if (!photo.date) photo.date = new Date().toISOString().split('T')[0];
    if (photo.isFavorite === undefined) photo.isFavorite = false;
    if (!photo.views) photo.views = 1;
    if (!photo.likes) photo.likes = 0;
    if (!photo.category && photo.album) photo.category = photo.album.toLowerCase();

    if (!this.db) {
      const photos = await this.getAllPhotos();
      photos.unshift(photo);
      try {
        localStorage.setItem('snapshot_photos', JSON.stringify(photos));
      } catch (err) {}
      return photo;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(PHOTO_STORE, 'readwrite');
      const store = tx.objectStore(PHOTO_STORE);
      const request = store.put(photo);

      request.onsuccess = () => resolve(photo);
      request.onerror = () => reject(request.error);
    });
  }

  async updatePhoto(photo) {
    if (!this.db) {
      const photos = await this.getAllPhotos();
      const index = photos.findIndex(p => p.id === photo.id);
      if (index !== -1) {
        photos[index] = photo;
        localStorage.setItem('snapshot_photos', JSON.stringify(photos));
      }
      return photo;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(PHOTO_STORE, 'readwrite');
      const store = tx.objectStore(PHOTO_STORE);
      const request = store.put(photo);

      request.onsuccess = () => resolve(photo);
      request.onerror = () => reject(request.error);
    });
  }

  async toggleFavorite(id) {
    const photo = await this.getPhotoById(id);
    if (!photo) return null;
    photo.isFavorite = !photo.isFavorite;
    if (photo.isFavorite) {
      photo.likes = (photo.likes || 0) + 1;
    } else if (photo.likes > 0) {
      photo.likes -= 1;
    }
    await this.updatePhoto(photo);
    return photo;
  }

  async deletePhoto(id) {
    if (!this.db) {
      let photos = await this.getAllPhotos();
      photos = photos.filter(p => p.id !== id);
      localStorage.setItem('snapshot_photos', JSON.stringify(photos));
      return true;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(PHOTO_STORE, 'readwrite');
      const store = tx.objectStore(PHOTO_STORE);
      const request = store.delete(id);

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }

  async getAllAlbums() {
    if (!this.db) {
      try {
        return JSON.parse(localStorage.getItem('snapshot_albums') || '[]');
      } catch (e) {
        return INITIAL_ALBUMS;
      }
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(ALBUM_STORE, 'readonly');
      const store = tx.objectStore(ALBUM_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const albums = request.result || [];
        resolve(albums.length ? albums : INITIAL_ALBUMS);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async addAlbum(album) {
    if (!album.name) return null;
    if (!album.id) album.id = album.name.toLowerCase().replace(/[^a-z0-9]/g, '-');

    if (!this.db) {
      const albums = await this.getAllAlbums();
      if (!albums.some(a => a.id === album.id)) {
        albums.push(album);
        localStorage.setItem('snapshot_albums', JSON.stringify(albums));
      }
      return album;
    }

    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(ALBUM_STORE, 'readwrite');
      const store = tx.objectStore(ALBUM_STORE);
      const request = store.put(album);

      request.onsuccess = () => resolve(album);
      request.onerror = () => reject(request.error);
    });
  }

  // Theme persistence
  getTheme() {
    return localStorage.getItem(THEME_KEY) || localStorage.getItem('lumora_theme') || 'sky';
  }

  saveTheme(themeName) {
    localStorage.setItem(THEME_KEY, themeName);
  }
}

// Global database instance
window.galleryDB = new GalleryDB();


/**
 * Snapshot Image Gallery & Dashboard Controller
 * Manages 5 Themes, Real-Time Filtering, Lightbox, Uploads, Albums & Storage
 */

class SnapshotGalleryApp {
  constructor() {
    this.photos = [];
    this.albums = [];
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.currentSort = 'newest';
    this.currentLayout = 'grid';
    this.currentView = 'gallery'; // 'gallery' | 'dashboard' | 'albums' | 'favorites'

    // Lightbox state
    this.visibleCards = [];
    this.currentCardIndex = 0;
    this.isSlideshow = false;
    this.slideshowTimer = null;
    this.zoomScale = 1;

    // Upload state
    this.pendingUploads = [];

    this.init();
  }

  async init() {
    // 1. Initialize Theme from localStorage
    this.initTheme();

    // 2. Initialize Database & load sample/saved data
    await window.galleryDB.init();
    await this.loadData();

    // 3. Attach UI Event Listeners
    this.attachEventListeners();

    // 4. Initial Render
    this.render();
  }

  /* -------------------------------------------------------------
   * 1. 5 THEMES ENGINE (Instant Switch & localStorage Persistence)
   * ----------------------------------------------------------- */
  initTheme() {
    const saved = window.galleryDB.getTheme() || 'sky';
    this.setTheme(saved, false);

    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-theme-name') || btn.getAttribute('data-theme');
        if (t) this.setTheme(t, true);
      });
    });
  }

  setTheme(themeName, showToast = true) {
    const valid = ['sky', 'light', 'dark', 'peach', 'lavender'];
    if (!valid.includes(themeName)) themeName = 'sky';

    document.documentElement.setAttribute('data-theme', themeName);
    window.galleryDB.saveTheme(themeName);

    document.querySelectorAll('.theme-btn').forEach(b => {
      const match = (b.getAttribute('data-theme-name') === themeName) || (b.getAttribute('data-theme') === themeName);
      if (match) b.classList.add('active');
      else b.classList.remove('active');
    });

    if (showToast) {
      const names = {
        sky: 'Light Sky',
        light: 'Light Minimal',
        dark: 'Dark Vibrant',
        peach: 'Light Peach',
        lavender: 'Light Lavender'
      };
      this.showToast(`Switched to ${names[themeName]} theme`);
    }
  }

  /* -------------------------------------------------------------
   * 2. DATA LOADING & STATS
   * ----------------------------------------------------------- */
  async loadData() {
    this.photos = await window.galleryDB.getAllPhotos();
    this.albums = await window.galleryDB.getAllAlbums();
    this.updateStats();
  }

  updateStats() {
    const totalPhotos = this.photos.length;
    const totalAlbums = this.albums.length;
    const totalFavs = this.photos.filter(p => p.isFavorite).length;
    const totalViews = this.photos.reduce((sum, p) => sum + (p.views || 120), 0);

    // Hero stats
    const heroPhotos = document.getElementById('hero-stat-photos');
    const heroCats = document.getElementById('hero-stat-categories');
    if (heroPhotos) heroPhotos.textContent = String(totalPhotos).padStart(2, '0');
    if (heroCats) heroCats.textContent = String(totalAlbums).padStart(2, '0');

    // Dashboard metrics
    const dPhotos = document.getElementById('dash-total-photos');
    const dCats = document.getElementById('dash-total-categories');
    const dFavs = document.getElementById('dash-total-favs');
    const dViews = document.getElementById('dash-total-views');
    const navFav = document.getElementById('nav-fav-badge');

    if (dPhotos) dPhotos.textContent = totalPhotos;
    if (dCats) dCats.textContent = totalAlbums;
    if (dFavs) dFavs.textContent = totalFavs;
    if (dViews) dViews.textContent = totalViews.toLocaleString();
    if (navFav) navFav.textContent = totalFavs;

    // Filter Badges
    const counts = { all: totalPhotos };
    this.photos.forEach(p => {
      const cat = (p.category || p.album || '').toLowerCase();
      counts[cat] = (counts[cat] || 0) + 1;
    });

    ['all', 'landscape', 'lifestyle', 'banaras'].forEach(k => {
      const badge = document.getElementById(`badge-${k}`);
      if (badge) badge.textContent = counts[k] || 0;
    });
  }

  /* -------------------------------------------------------------
   * 3. NAVIGATION & VIEW SWITCHING
   * ----------------------------------------------------------- */
  switchView(viewName) {
    this.currentView = viewName;

    // Update Nav Link Active class
    document.querySelectorAll('.navbar nav a').forEach(link => {
      const v = link.getAttribute('data-view');
      if (v === viewName) link.classList.add('active');
      else link.classList.remove('active');
    });

    // Toggle View Sections
    const views = ['gallery-view', 'dashboard-view', 'albums-view', 'favorites-view'];
    views.forEach(v => {
      const el = document.getElementById(v);
      if (el) {
        el.style.display = (v === `${viewName}-view`) ? 'block' : 'none';
      }
    });

    // Show/hide Hero based on view
    const hero = document.getElementById('home');
    if (hero) {
      hero.style.display = (viewName === 'gallery') ? 'flex' : 'none';
    }

    if (viewName === 'gallery') {
      this.renderGallery();
    } else if (viewName === 'dashboard') {
      this.renderDashboard();
    } else if (viewName === 'albums') {
      this.renderAlbums();
    } else if (viewName === 'favorites') {
      this.renderFavorites();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* -------------------------------------------------------------
   * 4. RENDERING & FILTERING
   * ----------------------------------------------------------- */
  render() {
    this.renderGallery();
    this.renderAlbums();
    this.renderDashboard();
    this.updateStats();
  }

  getFilteredPhotos() {
    let result = [...this.photos];

    // Category filter
    if (this.activeCategory !== 'all') {
      result = result.filter(p => {
        const cat = (p.category || p.album || '').toLowerCase();
        return cat === this.activeCategory.toLowerCase();
      });
    }

    // Search query
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(p => {
        const titleMatch = (p.title || '').toLowerCase().includes(q);
        const albumMatch = (p.album || p.category || '').toLowerCase().includes(q);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(q));
        return titleMatch || albumMatch || tagMatch;
      });
    }

    // Sorting
    result.sort((a, b) => {
      switch (this.currentSort) {
        case 'newest':
          return new Date(b.date || 0) - new Date(a.date || 0);
        case 'oldest':
          return new Date(a.date || 0) - new Date(b.date || 0);
        case 'title-asc':
          return (a.title || '').localeCompare(b.title || '');
        case 'title-desc':
          return (b.title || '').localeCompare(a.title || '');
        case 'likes':
          return (b.likes || 0) - (a.likes || 0);
        default:
          return 0;
      }
    });

    return result;
  }

  renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const empty = document.getElementById('emptyState');
    if (!grid) return;

    const list = this.getFilteredPhotos();
    this.visibleCards = list;

    if (list.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }

    if (empty) empty.style.display = 'none';
    grid.innerHTML = '';

    list.forEach((photo, idx) => {
      const card = this.createCardElement(photo, idx, list);
      grid.appendChild(card);
    });
  }

  renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const empty = document.getElementById('favoritesEmptyState');
    if (!grid) return;

    const favs = this.photos.filter(p => p.isFavorite);
    if (favs.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }

    if (empty) empty.style.display = 'none';
    grid.innerHTML = '';

    favs.forEach((photo, idx) => {
      const card = this.createCardElement(photo, idx, favs);
      grid.appendChild(card);
    });
  }

  renderAlbums() {
    const grid = document.getElementById('albumsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    this.albums.forEach(album => {
      const albumPhotos = this.photos.filter(p => {
        const cat = (p.category || p.album || '').toLowerCase();
        return cat === album.name.toLowerCase() || cat === album.id.toLowerCase();
      });

      const cover = albumPhotos.length > 0 ? (albumPhotos[0].thumb || albumPhotos[0].url || albumPhotos[0].localUrl) : (album.cover || 'https://images.unsplash.com/photo-1645483556285-ab3ae9729ba9?w=600');

      const card = document.createElement('div');
      card.className = 'album-card';
      card.innerHTML = `
        <div class="album-cover-wrap">
          <img src="${cover}" alt="${album.name}" loading="lazy" />
          <div class="album-cover-overlay">
            <span class="album-count-badge">${albumPhotos.length} Photos</span>
          </div>
        </div>
        <div class="album-content">
          <div class="album-title-line">
            <h3 class="album-name">${album.name}</h3>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: ${album.color || 'var(--accent-primary)'};"></span>
          </div>
          <p class="album-desc">${album.description || 'Collection of photographs in ' + album.name + '.'}</p>
        </div>
      `;

      card.onclick = () => {
        this.activeCategory = album.id || album.name.toLowerCase();
        this.switchView('gallery');
        document.querySelectorAll('.filter').forEach(f => {
          if (f.dataset.category === this.activeCategory) f.classList.add('active');
          else f.classList.remove('active');
        });
        this.renderGallery();
      };

      grid.appendChild(card);
    });
  }

  renderDashboard() {
    this.updateStats();

    // Popular Tags
    const tagsCloud = document.getElementById('dashboardTagsCloud');
    if (tagsCloud) {
      const tagCounts = {};
      this.photos.forEach(p => {
        if (p.tags) p.tags.forEach(t => tagCounts[t] = (tagCounts[t] || 0) + 1);
      });
      const topTags = Object.entries(tagCounts).sort((a,b) => b[1] - a[1]).slice(0, 10);
      tagsCloud.innerHTML = topTags.map(([tag, count]) => `
        <button class="filter" onclick="window.snapshotApp.filterByTag('${tag}')">
          #${tag} <span class="filter-badge">${count}</span>
        </button>
      `).join('');
    }

    // Recent Uploads
    const recentGrid = document.getElementById('dashboardRecentGrid');
    if (recentGrid) {
      const recent = [...this.photos].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)).slice(0, 4);
      recentGrid.innerHTML = '';
      recent.forEach((p, idx) => {
        recentGrid.appendChild(this.createCardElement(p, idx, recent));
      });
    }
  }

  filterByTag(tag) {
    this.searchQuery = tag;
    const input = document.getElementById('searchInput');
    if (input) input.value = tag;
    this.switchView('gallery');
    this.renderGallery();
  }

  resetFilters() {
    this.activeCategory = 'all';
    this.searchQuery = '';
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    document.querySelectorAll('.filter').forEach(f => {
      if (f.dataset.category === 'all') f.classList.add('active');
      else f.classList.remove('active');
    });
    this.renderGallery();
  }

  /* -------------------------------------------------------------
   * 5. CARD COMPONENT
   * ----------------------------------------------------------- */
  createCardElement(photo, index, photoList) {
    const card = document.createElement('article');
    card.className = 'photo-card';
    card.setAttribute('data-category', (photo.category || photo.album || 'landscape').toLowerCase());

    const isFav = Boolean(photo.isFavorite);
    const primarySrc = photo.thumb || photo.url || photo.localUrl;
    const fallbackSrc = photo.localUrl || photo.url;

    card.innerHTML = `
      <img 
        src="${primarySrc}" 
        alt="${photo.title}" 
        loading="lazy" 
        onerror="if (this.src !== '${fallbackSrc}' && '${fallbackSrc}') { this.src='${fallbackSrc}'; } else { this.onerror=null; this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600'; }"
      />
      <div class="photo-info">
        <span>${photo.album || photo.category || 'General'}</span>
        <h3>${photo.title}</h3>
      </div>
      <button class="favorite ${isFav ? 'liked' : ''}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}" aria-pressed="${isFav}">
        ${isFav ? 'â™¥' : 'â™¡'}
      </button>
    `;

    // Click card opens Lightbox
    card.addEventListener('click', (e) => {
      if (e.target.closest('.favorite')) return;
      this.openLightbox(photoList, index);
    });

    // Favorite button click
    const favBtn = card.querySelector('.favorite');
    favBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const updated = await window.galleryDB.toggleFavorite(photo.id);
      if (updated) {
        photo.isFavorite = updated.isFavorite;
        const liked = photo.isFavorite;
        favBtn.classList.toggle('liked', liked);
        favBtn.textContent = liked ? 'â™¥' : 'â™¡';
        favBtn.setAttribute('aria-pressed', String(liked));
        this.updateStats();
        if (this.currentView === 'favorites' && !liked) {
          this.renderFavorites();
        }
        this.showToast(liked ? 'Added to favorites â™¥' : 'Removed from favorites');
      }
    });

    return card;
  }

  /* -------------------------------------------------------------
   * 6. FULL-SCREEN LIGHTBOX & PREVIEWS
   * ----------------------------------------------------------- */
  openLightbox(photoList, index) {
    if (!photoList || photoList.length === 0) return;
    this.visibleCards = photoList;
    this.currentCardIndex = index;
    this.zoomScale = 1;

    const lb = document.getElementById('lightbox');
    if (!lb) return;

    this.showLightboxImage(this.currentCardIndex);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;

    this.stopSlideshow();
    this.zoomScale = 1;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  showLightboxImage(index) {
    if (!this.visibleCards.length) return;

    this.currentCardIndex = (index + this.visibleCards.length) % this.visibleCards.length;
    const photo = this.visibleCards[this.currentCardIndex];

    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    if (img) {
      img.style.opacity = '0';
      const mainSrc = photo.url || photo.localUrl || photo.thumb;
      const backupSrc = photo.localUrl || photo.thumb;
      
      img.onload = () => { img.style.opacity = '1'; };
      img.onerror = () => {
        if (img.src !== backupSrc && backupSrc) {
          img.src = backupSrc;
        } else {
          img.style.opacity = '1';
        }
      };
      
      img.src = mainSrc;
      img.alt = photo.title || '';
      img.style.transform = `scale(${this.zoomScale})`;
      if (img.complete) img.style.opacity = '1';
    }

    if (caption) {
      caption.textContent = `${photo.title} â€” ${photo.album || photo.category || 'General'}`;
    }
  }

  nextLightboxImage() {
    this.showLightboxImage(this.currentCardIndex + 1);
  }

  prevLightboxImage() {
    this.showLightboxImage(this.currentCardIndex - 1);
  }

  zoomImage(delta) {
    const img = document.getElementById('lightboxImg');
    if (!img) return;
    this.zoomScale = Math.min(3, Math.max(0.7, this.zoomScale + delta));
    img.style.transform = `scale(${this.zoomScale})`;
  }

  toggleSlideshow() {
    if (this.isSlideshow) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  startSlideshow() {
    this.isSlideshow = true;
    const btn = document.getElementById('lbSlideshow');
    const bar = document.getElementById('lbProgress');
    if (btn) btn.classList.add('active');

    if (bar) {
      bar.style.transition = 'width 3000ms linear';
      bar.style.width = '100%';
    }

    this.slideshowTimer = setInterval(() => {
      this.nextLightboxImage();
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.transition = 'width 3000ms linear';
          bar.style.width = '100%';
        }, 30);
      }
    }, 3000);

    this.showToast('Slideshow started');
  }

  stopSlideshow() {
    this.isSlideshow = false;
    clearInterval(this.slideshowTimer);
    this.slideshowTimer = null;
    const btn = document.getElementById('lbSlideshow');
    const bar = document.getElementById('lbProgress');
    if (btn) btn.classList.remove('active');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
    }
  }

  toggleFullscreen() {
    const lb = document.getElementById('lightbox');
    if (!document.fullscreenElement) {
      lb?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  async downloadCurrentPhoto() {
    const photo = this.visibleCards[this.currentCardIndex];
    if (!photo) return;

    this.showToast('Downloading image...');
    try {
      const a = document.createElement('a');
      a.href = photo.url || photo.localUrl;
      a.target = '_blank';
      const cleanName = (photo.title || 'snapshot-photo').toLowerCase().replace(/\s+/g, '-');
      a.download = `${cleanName}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      window.open(photo.url || photo.localUrl, '_blank');
    }
  }

  /* -------------------------------------------------------------
   * 7. UPLOAD HANDLING & ALBUMS MODALS
   * ----------------------------------------------------------- */
  openUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.resetUploadForm();
    }
  }

  closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      this.resetUploadForm();
    }
  }

  resetUploadForm() {
    this.pendingUploads = [];
    const previewWrap = document.getElementById('uploadPreviewWrap');
    const form = document.getElementById('uploadForm');
    if (previewWrap) previewWrap.innerHTML = '';
    if (form) form.reset();
  }

  handleFiles(files) {
    if (!files || files.length === 0) return;
    const previewWrap = document.getElementById('uploadPreviewWrap');

    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        this.pendingUploads.push({ file, dataUrl, name: file.name.replace(/\.[^/.]+$/, '') });

        const thumb = document.createElement('img');
        thumb.src = dataUrl;
        thumb.style.width = '60px';
        thumb.style.height = '60px';
        thumb.style.objectFit = 'cover';
        thumb.style.borderRadius = '10px';
        previewWrap?.appendChild(thumb);

        const titleInput = document.getElementById('uploadTitleInput');
        if (titleInput && !titleInput.value) {
          titleInput.value = file.name.replace(/\.[^/.]+$/, '');
        }
      };
      reader.readAsDataURL(file);
    });
  }

  async submitUpload(e) {
    e.preventDefault();

    const titleInput = document.getElementById('uploadTitleInput');
    const catSelect = document.getElementById('uploadCategorySelect');
    const tagsInput = document.getElementById('uploadTagsInput');
    const urlInput = document.getElementById('uploadUrlInput');

    const title = titleInput?.value.trim() || 'New Photo';
    const category = catSelect?.value || 'landscape';
    const albumName = category.charAt(0).toUpperCase() + category.slice(1);
    const tags = (tagsInput?.value || '').split(',').map(t => t.trim().toLowerCase()).filter(Boolean);

    let toSave = [];

    if (this.pendingUploads.length > 0) {
      this.pendingUploads.forEach((item, idx) => {
        const photoTitle = this.pendingUploads.length === 1 ? title : `${title} (${idx + 1})`;
        toSave.push({
          id: 'photo-' + Date.now() + '-' + idx,
          title: photoTitle,
          url: item.dataUrl,
          thumb: item.dataUrl,
          album: albumName,
          category: category,
          tags: tags.length ? tags : ['upload', category],
          isFavorite: false,
          date: new Date().toISOString().split('T')[0],
          views: 1,
          likes: 0
        });
      });
    } else if (urlInput && urlInput.value.trim() !== '') {
      const url = urlInput.value.trim();
      toSave.push({
        id: 'photo-' + Date.now(),
        title: title,
        url: url,
        thumb: url,
        album: albumName,
        category: category,
        tags: tags.length ? tags : ['web', category],
        isFavorite: false,
        date: new Date().toISOString().split('T')[0],
        views: 1,
        likes: 0
      });
    } else {
      this.showToast('Please select an image file or enter an image URL');
      return;
    }

    for (const p of toSave) {
      await window.galleryDB.addPhoto(p);
    }

    this.showToast(`Uploaded ${toSave.length} ${toSave.length === 1 ? 'photo' : 'photos'} to ${albumName}!`);
    this.closeUploadModal();
    await this.loadData();
    this.switchView('gallery');
  }

  /* -------------------------------------------------------------
   * 8. ATTACH EVENT LISTENERS
   * ----------------------------------------------------------- */
  attachEventListeners() {
    // Nav links
    document.querySelectorAll('.navbar nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        if (view) this.switchView(view);
      });
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderGallery();
    });

    // Category Filter Buttons
    document.querySelectorAll('.filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.category;
        if (!cat) return;
        this.activeCategory = cat;

        document.querySelectorAll('.filters .filter').forEach(f => f.classList.remove('active'));
        btn.classList.add('active');

        this.renderGallery();
      });
    });

    // Sort Select
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      this.currentSort = e.target.value;
      this.renderGallery();
    });

    // Layout buttons
    document.querySelectorAll('.layout-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const layout = btn.dataset.layout;
        document.querySelectorAll('.layout-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const grid = document.getElementById('galleryGrid');
        if (grid) {
          if (layout === 'masonry') grid.classList.add('layout-masonry');
          else grid.classList.remove('layout-masonry');
        }
      });
    });

    // Lightbox Controls
    const lb = document.getElementById('lightbox');
    document.getElementById('closeBtn')?.addEventListener('click', () => this.closeLightbox());
    document.getElementById('nextBtn')?.addEventListener('click', () => this.nextLightboxImage());
    document.getElementById('prevBtn')?.addEventListener('click', () => this.prevLightboxImage());
    document.getElementById('lbZoomIn')?.addEventListener('click', () => this.zoomImage(0.25));
    document.getElementById('lbZoomOut')?.addEventListener('click', () => this.zoomImage(-0.25));
    document.getElementById('lbSlideshow')?.addEventListener('click', () => this.toggleSlideshow());
    document.getElementById('lbFullscreen')?.addEventListener('click', () => this.toggleFullscreen());
    document.getElementById('lbDownload')?.addEventListener('click', () => this.downloadCurrentPhoto());

    lb?.addEventListener('click', (e) => {
      if (e.target === lb) this.closeLightbox();
    });

    // Global Keydown
    document.addEventListener('keydown', (e) => {
      const isLbOpen = lb?.classList.contains('open');

      if (e.key === 'Escape') {
        if (isLbOpen) this.closeLightbox();
        this.closeUploadModal();
        document.getElementById('newAlbumModal')?.classList.remove('active');
      }

      if (isLbOpen) {
        if (e.key === 'ArrowRight') this.nextLightboxImage();
        if (e.key === 'ArrowLeft') this.prevLightboxImage();
        if (e.key === ' ') {
          e.preventDefault();
          this.toggleSlideshow();
        }
      }

      // Quick Theme toggle on 'T'
      if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        const themes = ['sky', 'light', 'dark', 'peach', 'lavender'];
        const cur = window.galleryDB.getTheme();
        const next = themes[(themes.indexOf(cur) + 1) % themes.length];
        this.setTheme(next, true);
      }
    });

    // Upload Modal
    document.getElementById('btn-open-upload')?.addEventListener('click', () => this.openUploadModal());
    document.getElementById('uploadCloseBtn')?.addEventListener('click', () => this.closeUploadModal());
    document.getElementById('uploadCancelBtn')?.addEventListener('click', () => this.closeUploadModal());
    document.getElementById('uploadForm')?.addEventListener('submit', (e) => this.submitUpload(e));

    const dropzone = document.getElementById('uploadDropzone');
    const fileInput = document.getElementById('fileInput');

    dropzone?.addEventListener('click', () => fileInput?.click());
    fileInput?.addEventListener('change', (e) => this.handleFiles(e.target.files));

    ['dragover', 'dragenter'].forEach(name => {
      dropzone?.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropzone?.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone?.addEventListener('drop', (e) => {
      this.handleFiles(e.dataTransfer.files);
    });

    // Album Modal
    const albumModal = document.getElementById('newAlbumModal');
    document.getElementById('btn-create-album')?.addEventListener('click', () => {
      albumModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    document.getElementById('newAlbumCloseBtn')?.addEventListener('click', () => {
      albumModal?.classList.remove('active');
      document.body.style.overflow = '';
    });

    document.getElementById('newAlbumCancelBtn')?.addEventListener('click', () => {
      albumModal?.classList.remove('active');
      document.body.style.overflow = '';
    });

    document.getElementById('newAlbumForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('newAlbumNameInput')?.value.trim();
      const desc = document.getElementById('newAlbumDescInput')?.value.trim();
      const color = document.getElementById('newAlbumColorInput')?.value || '#64C9EA';

      if (!name) return;

      await window.galleryDB.addAlbum({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name: name,
        description: desc,
        color: color
      });

      this.showToast(`Album "${name}" created!`);
      albumModal?.classList.remove('active');
      document.body.style.overflow = '';
      await this.loadData();
      this.render();
    });
  }

  /* -------------------------------------------------------------
   * 9. TOAST NOTIFICATIONS
   * ----------------------------------------------------------- */
  showToast(msg) {
    const box = document.getElementById('toastBox');
    if (!box) return;

    const el = document.createElement('div');
    el.className = 'toast-msg';
    el.textContent = msg;

    box.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      setTimeout(() => el.remove(), 250);
    }, 2800);
  }
}

// Global alias for compatibility
window.SnapshotGalleryApp = SnapshotGalleryApp;
window.addEventListener('DOMContentLoaded', () => {
  window.snapshotApp = new SnapshotGalleryApp();
  window.lumoraApp = window.snapshotApp;
});
