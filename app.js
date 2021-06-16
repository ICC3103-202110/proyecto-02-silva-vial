//importing libraries
const {printTable} = require('console-table-printer')
const axios = require('axios');

//bringin functions from other files
const {getTitle, inputAction, cityToUpdate, table, apiCalls} = require('./view')
const {changeCity} = require('./update')


function print(array, locations){
    let print=[]
    for(let value=0; value<array.length;value++){
        print.push({'Name': locations[value],'Temperature':array[value].temp,'Maximum':array[value].temp_max,'Minimum':array[value].temp_min})
    }
    printTable(print)
}

async function makeRequest(array, places) {

    let config=[]
    for(let count=0; count<array.length;count++){
        config.push({
            method: 'get',
            url: array[count]
        })
    }
   
    respond=[]
    for(let counter=0; counter<config.length;counter++){
        let call= await axios(config[counter])
        respond.push(call.data.main)
    }
    print(respond,places)
}



//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array){


    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')
    let cities =array

    //api call to print table
    let calls=apiCalls(cities)
    if (calls!=false){
        await makeRequest(calls, cities)
    }

    

    let answerAction = await inputAction(cities)
    let action=answerAction.action
    let answerCity= await cityToUpdate(action, cities)
    let city=answerCity.city
    cities=changeCity(action,city,cities)
    
   
    //recursivity for creating and infinite loop
    /*sistem(cities)
    console.clear()*/
   

}

sistem(['santiago, chile','wuhan, china'])
