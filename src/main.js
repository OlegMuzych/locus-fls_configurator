const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');
const { ipcMain, dialog } = require('electron');

app.allowRendererProcessReuse = false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    maxWidth: 1300,
    // maxWidth: 13000,
    minWidth: 990,
    // minHeight: 750,
    maxHeight: 1000,
    // height: 750,
    width: 990,

    // Для Беларуссии минимальное разрешение под их ПК
    height: 550,
    minHeight: 550,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
      zoomFactor: 0.6,
    },
    fullscreenable: false,
    icon: __dirname + '/trademark/pm-logo.ico',
    removeMenu: true,
    autoHideMenuBar: true,
  });

  mainWindow.setMenuBarVisibility(false);

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  app.whenReady().then(() => {
    ipcMain.handle('dialog', (event, method, params) => {
      return dialog[method](mainWindow,params);
    });
    ipcMain.handle('app', (event, method, params) => {
      return app[method](params);
    });
    ipcMain.handle('nativeTheme', (event, properties) => {
      return nativeTheme[properties];
    });
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
