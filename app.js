//importing libraries
const {printTable} = require('console-table-printer')


//bringin functions from other files
const {getTitle, inputAction, cityToUpdate, table, apiCalls} = require('./view')
const {makeRequest} = require('./update')



//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array,arrayPlaces){

    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')
    let cities =array
    let data=arrayPlaces
  
    

    //print table
    if(data.length!=0){
        printTable(table(data, cities))
    }
    
    

    let answerAction = await inputAction(cities)
    let action=answerAction.action
    let answerCity= await cityToUpdate(action, cities)

    let end=0
    //desicions
    if(action==='Add city'){
        cities.push(answerCity.city)
        let calls=apiCalls(answerCity.city)
        await makeRequest(calls).then(function(value) {
            data.push(value)
        })
    }else if(action==='Delete city'){
        cities.splice(cities.indexOf(answerCity.city), 1)
        data.splice(cities.indexOf(answerCity.city), 1)

    }else if(action==='Update city'){
        let index=cities.indexOf(answerCity.city)
        let calls=apiCalls(answerCity.city)
        await makeRequest(calls).then(function(value) {
            data[index]=value
        })   
    }else if(action==='Stop program'){
        end=1
    }

    
     printTable(data, cities)
    
    
   
    //recursivity for creating and infinite loop
    console.clear()
    if(end===0){
        sistem(cities,data)
    }
    
   

}

sistem([],[])
