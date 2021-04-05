#!/usr/bin/env node
const fs = require("fs");
const chokidar = require('chokidar')
const { watchSetup } = require('./watch_setup/index')
const {  success } = require('./materials/messages')
// !MAIN

const WORK_PLACE = fs.existsSync(process.cwd() + '/src') 
    ? process.cwd() + '/src/' // vue project
    : process.cwd() // nuxt project

console.log(WORK_PLACE);

success('Start watching'  )
const componentWatcher = chokidar
  .watch( WORK_PLACE + "/components/**/**", { ignored: /node_modules/ })

const pageWatcher = chokidar
  .watch( WORK_PLACE + "/pages/**/**", { ignored: /node_modules/ })

const storeWatcher = chokidar
  .watch( WORK_PLACE + "/store/**/**", { ignored: /node_modules/ })
  

const serviceWatcher = chokidar
  .watch( WORK_PLACE + "/services/**/**", { ignored: /node_modules/ })
  


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