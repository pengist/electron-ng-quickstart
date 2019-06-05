const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;
const createWindow = function () {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 768,
        webPreferences: {
            nodeIntegration: false
        }
    });
    mainWindow.loadFile(`index.html`);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
