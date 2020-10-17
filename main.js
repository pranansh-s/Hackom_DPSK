const electron = require('electron');

const {app, BrowserWindow} = electron;

app.on('ready', function(){
  let win = new BrowserWindow({fullscreen:true, webPreferences:{nodeIntegration:true}, frame:false});
  win.loadFile('index.html')
});
