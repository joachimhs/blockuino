var { app, ipcMain, globalShortcut, Menu } = require('electron')
var menubar = require('menubar')
var mb = menubar({ dir: __dirname + '/app', width: 440, height: 270, icon: __dirname + '/app/icon.png', preloadWindow: true, windowPosition: 'topRight' })
var isDev = require('electron-is-dev')

mb.on('show', function () {
  mb.window.webContents.send('show')
})

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

mb.app.on('activate', function () {
  mb.showWindow()
})

// when receive the abort message, close the app
ipcMain.on('abort', function () {
  mb.hideWindow()
})

// update shortcuts when preferences change
ipcMain.on('update-preference', function (evt, pref, initialization) {
  
})

var template = [
  
]

mb.on('ready', function ready () {
  // Build default menu for text editing and devtools. (gone since electron 0.25.2)
  var menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
	
	var ipc = require("ipc");
	
})