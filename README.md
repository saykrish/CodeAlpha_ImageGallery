# 📸 Snapshot | Modern Image Gallery & Dashboard

A responsive image gallery and dashboard web application named **Snapshot**, featuring clean typography, pastel gradient backgrounds, interactive category filters (**Landscape**, **Lifestyle**, **Banaras**), 5 instant themes with persistence, full-screen lightbox previewer, drag-and-drop uploads, custom albums, and favorites bookmarking.

---

## ✨ Features

### 1. 🎨 5 Themes with Instant Switching & localStorage Persistence
Switch themes anytime using the navbar buttons or by pressing <kbd>T</kbd> on your keyboard:
- 🌌 **Light Sky** *(Default Snapshot)*: Signature fresh sky-blue radial glow (`#D9F4FC`, `#FFE6D9`), mint green badges (`#438B75`), and ocean accents.
- ☀️ **Light**: Clean, minimalist white design with crisp slate typography and soft blue highlights.
- 🌙 **Dark**: Elegant obsidian dark background (`#090D16`) with neon cyan (`#38BDF8`) and vibrant accents.
- 🍑 **Peach (Lightened)**: Soft, airy warm pastel peach with gentle apricot gradients, delicate coral highlights, and warm golden glow.
- 💜 **Lavender (Lightened)**: Soft, light lilac and lavender shades with gentle purple gradients and a dreamy aesthetic.

> **Zero Flash (FOUC)**: Themes are stored in `localStorage` under `snapshot_theme` and applied immediately before the DOM paints.

---

### 2. 🌟 Photo Sections
All previous sample photos have been removed and replaced with your authentic attached photos across 3 sections:
- 🏔️ **Landscape** (4 High-Resolution captures):
  - *Golden Horizon Valley*
  - *Misty Alpine Peaks*
  - *Serene Wilderness Reflections*
  - *Dramatic Canyon Twilight*
- ☕ **Lifestyle** (3 High-Resolution captures):
  - *Quiet Morning Coffee*
  - *Modern Creative Workspace*
  - *Authentic Moments*
- 🛕 **Banaras** (5 High-Resolution captures):
  - *Historic Ghats of Varanasi*
  - *Evening Ganga Aarti Glow*
  - *Architectural Heritage of Kashi*
  - *Morning Boats on the Ganges*
  - *Lanes of Ancient Kashi*

---

### 3. 🔍 Full-Screen Lightbox Previewer
- Immersive dark backdrop blur (`backdrop-filter: blur(16px)`).
- Caption showing: `Photo Title — Category`.
- Navigation: Left (`❮`) and Right (`❯`) arrow buttons, keyboard arrows (<kbd>&larr;</kbd> / <kbd>&rarr;</kbd>), and touch gestures.
- Action Toolbar:
  - **Zoom In / Out** (`+` and `-`)
  - **Slideshow Mode** (auto-advance every 3 seconds with a smooth top progress bar)
  - **Fullscreen API** toggle
  - **One-Click Download** to save images locally
  - Close button (`×`), click outside, or press <kbd>Escape</kbd>

---

### 4. 📤 Image Uploads & Custom Albums
- **Drag & Drop Upload Zone** with file picker (supports JPG, PNG, WEBP, AVIF, GIF).
- **Web Image URL Import** to paste online links.
- Form to set Title, Category / Album (Landscape, Lifestyle, Banaras, or custom), and Tags.
- **IndexedDB & LocalStorage**: Uploaded photos and custom albums persist across page refreshes.
- **Custom Album Modal**: Create new collections with title, description, and color accent.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>T</kbd> | Cycle through all 5 dashboard themes |
| <kbd>Esc</kbd> | Close Lightbox or active modal dialogs |
| <kbd>&larr;</kbd> / <kbd>&rarr;</kbd> | Previous / Next image in Lightbox |
| <kbd>Space</kbd> | Play / Pause Slideshow in Lightbox |

---

## 🚀 How to Run

Double click [`index.html`](file:///c:/Users/Dileep%20Kumar/Documents/CodeAlpha_ImageGallery/index.html) or open it directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari). No server or build tools needed.
