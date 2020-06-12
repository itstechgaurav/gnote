const chalk = require('chalk');


module.exports = () => {
    console.log("\n");
    console.log('', chalk.bgBlueBright.rgb(225,225,225).bold('                          '))
    console.log('', chalk
        .bgBlueBright
        .rgb(225,225,225)
        .bold.inverse('        Notes App         '.toUpperCase())
    );
    console.log('', chalk.bgBlueBright.rgb(225,225,225).bold('                          '))
    console.log('', chalk
        .bgBlueBright.whiteBright(" Author:")
         + chalk.bgBlueBright.yellowBright(" GAURAV           ")
    );
    
    console.log('', chalk
        .bgBlueBright.whiteBright(" Instagram:")
         + chalk.bgBlueBright.yellowBright(" @myselfgroot  ")
    );
    console.log('', chalk.bgBlueBright.rgb(225,225,225).bold('                          '))
    console.log("\n");
}