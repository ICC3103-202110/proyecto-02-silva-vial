//importing libraries
const {printTable} = require('console-table-printer')


//bringin functions from other files
const {getTitle, inputAction, cityToUpdate, table, apiCalls} = require('./view')
const {changeCity, makeRequest} = require('./update')



//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array){
    

    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')
    let cities =array
    

    //api call to print table
    if(cities.length!=0){
        let data=[]
        let calls=apiCalls(cities)
        if (calls!=false){
            await makeRequest(calls, cities).then(function(value) {
                data.push(value)
            })
        }
        printTable(table(data[0], cities))
    }
    
    

    let answerAction = await inputAction(cities)
    let action=answerAction.action
    let answerCity= await cityToUpdate(action, cities)
    let city=answerCity.city
    cities=changeCity(action,city,cities)
    
   
    //recursivity for creating and infinite loop
    console.clear()
    sistem(cities)
    
   

}

sistem([])
