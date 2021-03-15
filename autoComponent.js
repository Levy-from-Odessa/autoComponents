const chokidar = require("chokidar");

const factory = require("./factory/index")



function getFileName(path){
    // get file
    const pathArray = path.split('/')
    const file = pathArray[pathArray.length - 1]

    let template = 'single'
    let name = file
    
    
    if (!name.includes("/")) {
      return name 
    }
    
} 
function getProps(file) {
    let name = file
    let template = 'single'

    const typeFile = file[0]
    if (typeFile === typeFile.toLowerCase()) {
    name = file.slice(1, file.length)
      if (typeFile === 's') {
        template = 'single'
      }
      if (typeFile === 'f') {
        template = 'full'
      }
    }else {
      return
    }

    return {name , template}

}

const componentWatcher = chokidar
  .watch("components/**/**", { ignored: /node_modules/ })


const storeWatcher = chokidar
  .watch("store/**/**", { ignored: /node_modules/ })
  

componentWatcher.on("addDir", (path, event) => {
    const file = getFileName(path)
    if (file === 'components') {return}


    const fileInfo = getProps(file);
    if (fileInfo) {
      const { name, template } = fileInfo
      factory.createFiles(path, name,  template, 'components')
    }
  });

storeWatcher.on("addDir", (path, event) => {
    const file = getFileName(path)
    if (file === 'store') {return}


    const fileInfo = getProps(file);
    if (fileInfo) {
      const { name, template } = fileInfo
      factory.createFiles(path, name,  template, 'store')
    }
  });