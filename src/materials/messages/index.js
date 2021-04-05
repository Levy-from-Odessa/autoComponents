const chalk = require('chalk')

const swig = require("swig")

const path = require('path');


// render template with props
function compileTpl(file, args){ 
  const compiled = swig.compileFile(file)
  return compiled(args)
}  

const BLUEPRINT_DIR =  path.dirname(require.main.filename) +'/materials/blueprints'
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
    const errorBlueprint  = BLUEPRINT_DIR + '/message/error.js'
    const tpl = compileTpl( errorBlueprint, {
        Bg, Title, Msg, Border
    })
    console.log(tpl);
}


const success = (args) => {
    const {Bg, Title, Msg, Border} = detailMessage('Green', args)
    const successBlueprint = BLUEPRINT_DIR + '/message/success.js'
    const tpl = compileTpl( successBlueprint, {
        Bg, Title, Msg, Border
    })
    console.log(tpl);
}


module.exports = {
    error, 
    success
}