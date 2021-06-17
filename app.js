//importing libraries
const {printTable} = require('console-table-printer')


//bringin functions from other files
const {getTitle, inputAction, cityToUpdate, table} = require('./view')
const { updateTable} = require('./update')


    

//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array,arrayPlaces){

    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')
    let cities =array
    let data=arrayPlaces

    //printing table
    if(cities.length!=0){
        printTable(table(data, cities))
    }

    let answerAction = await inputAction(cities)
    let action=answerAction.action

    //recursivity breaker
    if(action!='Stop program'){
        let answerCity= await cityToUpdate(action, cities)
        
        //desicions according to answers
        let result =await updateTable(action, cities, answerCity.city, data)
        cities=result[0]
        data=result[1]
        end=result[2]
        
        //recursivity for creating and infinite loop
        console.clear()
        sistem(cities,data)
    }
}

sistem([],[])

