# Balon Poin

Prototipe task self-control (Electron wrapper dari `index.html`).

## Jalankan tanpa exe
Buka `index.html` di browser (double-click). Offline, tidak butuh install apa pun.

## Bikin exe lewat GitHub (otomatis)
1. Buat repo baru di GitHub, lalu di folder ini:
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
2. Buka tab **Actions** di repo, tunggu workflow "Build Windows exe" selesai.
3. Download artifact **BalonPoin-exe** (isinya satu file .exe portable).

## Bikin exe lokal (di Windows, butuh Node.js)
   npm install
   npm start        (tes jendela app)
   npm run dist     (hasil di folder dist/)

Untuk ubah task, edit `index.html` lalu push lagi.
