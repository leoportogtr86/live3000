const electron = require('electron')

const { app, BrowserWindow } = electron


app.on('ready', () => {

    console.log('electron rodando...')

    const mainWindow = new BrowserWindow({


    })

    mainWindow.loadURL('http://localhost:3000')

})





