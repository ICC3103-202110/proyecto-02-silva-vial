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
            choices:['Add city', 'Update city', 'Delete city','Stop program']
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

function table(array, locations){
    let print=[]
    for(let value=0; value<array.length;value++){
        print.push({'Name': locations[value],'Temperature':array[value].temp,'Maximum':array[value].temp_max,'Minimum':array[value].temp_min})
    }
    return print
}


//function that builds the link's to call
function apiCalls(name){
    return 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&APPID=23a44f16645fc81dd874a41b96552643'
}



//export modules out of the file
module.exports = {
    getTitle,
    inputAction,
    cityToUpdate,
    table,
    apiCalls
}