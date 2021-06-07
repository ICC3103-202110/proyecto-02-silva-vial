///calling libraries
const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

//creating the title printing label
function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function input(array){

    //check if the places array is empty in order to initialize
    if(array.length===0){
        return inquirer.prompt([{
                type:'list',
                name:'action',
                message: 'Select action',
                choices:['Add city'] 
        },{
            type:'input',
            name:'city',
            message: 'Location? '
        }])
       
    }else{
        return inquirer.prompt([{
            type:'list',
            name:'action',
            message: 'Select action',
            choices:['Add city', 'Update city', 'Delete city']
        },{
            type:'input',
            name:'city',
            message: 'Location? '
        }])
    }
  
   

    

}





//export modules out of the file
module.exports = {
    getTitle,
    input
}