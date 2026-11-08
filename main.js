const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 900, height: 900, autoHideMenuBar: true,
    title: 'Balon Poin',
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}
Menu.setApplicationMenu(null);
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
