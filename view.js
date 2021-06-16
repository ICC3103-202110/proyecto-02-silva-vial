//calling libraries
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


//ask the action to perfome
function inputAction(array){

    //check if the places array is empty in order to initialize
    if(array.length===0){
        return inquirer.prompt([{
                type:'list',
                name:'action',
                message: 'Select action',
                choices:['Add city'] 
        }])
       
    }else{
        return inquirer.prompt([{
            type:'list',
            name:'action',
            message: 'Select action',
            choices:['Add city', 'Update city', 'Delete city']
        }])
    }
}


//user selects the city to add, delete or update
function cityToUpdate(desire, array){
    if(desire==='Add city'){
    
        return inquirer.prompt([{
            type:'input',
            name:'city',
            message: 'Location?'
    }])

    }else{

        return inquirer.prompt([{
            type:'list',
            name:'city',
            message: 'Select a location',
            choices:array 
        }])
    }
}

function table(array){
    let table=[]
    for(let count=0; count<array.length;count++){
        table.push({'Name': array[count],'Temperature':'','Maximum':'','Minimum':''})
    }
    return table
}

function apiCalls(array){
    if(array.length===0){
        return false
    } else{
        let apis=[]
        for(let counter=0; counter<array.length;counter++){
            apis.push('https://api.openweathermap.org/data/2.5/weather?q='+array[counter]+'&APPID=23a44f16645fc81dd874a41b96552643')
        }
        return apis
    }

}



//export modules out of the file
module.exports = {
    getTitle,
    inputAction,
    cityToUpdate,
    table,
    apiCalls
}