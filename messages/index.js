const chalk = require('chalk')

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

const containerMessage = (Border, content) => {
    const width = content.length / 3
    const container =
`${Border.repeat(width)} 
${content}
${Border.repeat(width)}`

    return container
}

const error = (args) => {
    const {Bg, Title, Msg, Border} = detailMessage('Red', args)
    console.error(
        containerMessage(
            Border, 
            `    ${Bg}${Title}${Bg}
    ${Msg}`
             ));
}


const success = (args) => {
    const {Bg, Title, Msg, Border} = detailMessage('Green', args)
    console.log(
        containerMessage(
            Border, 
            `    ${Bg}${Title}${Bg}
    ${Msg}`
             ));
}


module.exports = {
    error, 
    success
}