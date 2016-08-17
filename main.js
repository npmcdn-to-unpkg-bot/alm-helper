const {app, BrowserWindow} = require('electron')

// Global window object
let win

function createWindow () {
  // Create window
  win = new BrowserWindow({width: 700, height: 450})
  win.setMenu(null)

  // Load index.html
  win.loadURL(`file://${__dirname}/public/index.html`)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
