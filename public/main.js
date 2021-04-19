const { app, BrowserWindow } = require('electron')
function createWindow() {
	const win = new BrowserWindow({ width: 800, height: 600 })
	win.setMenu(null)
	win.loadURL('http://localhost:3000/')
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
