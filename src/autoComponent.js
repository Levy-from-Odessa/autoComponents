#!/usr/bin/env node
const chokidar = require('chokidar')
const { watchSetup } = require('./watch_setup/index')
const {  success } = require('./messages')
// !MAIN

success('Start watching'  )
const componentWatcher = chokidar
  .watch( process.cwd() + "/components/**/**", { ignored: /node_modules/ })

const pageWatcher = chokidar
  .watch( process.cwd() + "/pages/**/**", { ignored: /node_modules/ })

const storeWatcher = chokidar
  .watch( process.cwd() + "/store/**/**", { ignored: /node_modules/ })
  

const serviceWatcher = chokidar
  .watch( process.cwd() + "/services/**/**", { ignored: /node_modules/ })
  


componentWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'components')
  });


pageWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'pages')
  });


storeWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'store')
  });

serviceWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'services')
  });