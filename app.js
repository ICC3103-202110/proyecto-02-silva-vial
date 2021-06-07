//importing libraries
const {printTable} = require('console-table-printer')

//bringin functions from other files
const {getTitle, inputAction, cityToUpdate, table} = require('./view')
const {changeCity} = require('./update')



//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array){

    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')

    printTable(table(array))

    //asking inputs
    let cities =array
    let answerAction = await inputAction(array)
    let action=answerAction.action
    let answerCity= await cityToUpdate(action, array)
    let city=answerCity.city
    cities=changeCity(action,city,array)
    console.log(cities)
   
    //recursivity for creating and infinite loop
    /*sistem(cities)
    console.clear()*/
   

}

sistem(['Santiago', 'viña', 'buenos aires'])
