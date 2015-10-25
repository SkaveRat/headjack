'use babel';

import app from 'app';
import BrowserWindow from 'browser-window';

let mainWindow = null;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.commandLine.appendSwitch ('ignore-certificate-errors', true);

app.on('select-certificate', function(event, host, url, list, callback) {
  console.log(event);
  console.log("FOOBAR");

  event.preventDefault();
  callback(list[0]);
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.openDevTools();
});
