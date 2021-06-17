//importing libraries
const axios = require('axios');

//bringin functions from other files
const {apiCalls} = require('./view')

//function that makes the calls to update the information
async function makeRequest(link) {

    const config={
        method: 'get',
        url: link
    }
   
    let call= await axios(config)
    let respond= call.data.main
    
    return respond
}

//function that updates de data to print in table according to user's answers
async function updateTable(move, places, place, info){
    end=0
    if(move==='Add city'){
        places.push(place)
        let calls=apiCalls(place)
        await makeRequest(calls).then(function(value) {
            info.push(value)
        })
    }else if(move==='Delete city'){
        places.splice(places.indexOf(place), 1)
        info.splice(places.indexOf(place), 1)

    }else if(move==='Update city'){
        let index=places.indexOf(place)
        let calls=apiCalls(place)
        await makeRequest(calls).then(function(value) {
            info[index]=value
        })   
    }else if(move==='Stop program'){
        end=1
    }

    return [places, info, end]

}


//export modules out of the file
module.exports = {
    updateTable
}