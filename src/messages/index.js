const chalk = require('chalk')

const swig = require("swig")

// render template with props
function compileTpl(file, args){ 
  const compiled = swig.compileFile(file)
  return compiled(args)
}  
const tpl = compileTpl('./src/blueprints/message/error.js', {name: 123})
// console.log(tpl);
// writePath(templateContent.file, tpl);
/* 
** Console wrappers
*/
const detailMessage = (color, args) => {
    const customBgColor = `bg${color}`
    const customBrightColor = `bg${color}Bright` 
    const customTitleColor = color === 'Red' ? 'white' : 'black'
    const customBorderColor = color === 'Red' ? 'red' : 'green'
    const statement = args.split(' ')
    
    
    const Bg = chalk[customBgColor]('    ')
    const Title = chalk[customBrightColor][customTitleColor].bold(statement[0])
    const Msg = chalk(...statement) 
    const Border = chalk.underline[customBorderColor]('_ ')
    return{
        Bg,
        Title,
        Msg,
        Border
    }
}


const error = (args) => {
    const {Bg, Title, Msg, Border} = detailMessage('Red', args)
    const tpl = compileTpl('./src/blueprints/message/error.js', {
        Bg, Title, Msg, Border
    })
    console.log(tpl);
}


const success = (args) => {
    const {Bg, Title, Msg, Border} = detailMessage('Green', args)
    const tpl = compileTpl('./src/blueprints/message/success.js', {
        Bg, Title, Msg, Border
    })
    console.log(tpl);
}


module.exports = {
    error, 
    success
}