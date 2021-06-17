//importing libraries
const axios = require('axios');

//updates the cities in fuction of the user's inputs
function changeCity(desire, location, array,){
    if(desire==='Add city'){
        array.push(location)  
    }else if(desire==='Delete city'){
        array.splice(array.indexOf(location), 1)
    }
    return array
}

//function that makes the calls to update the information
async function makeRequest(array) {

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
    //print(respond,places)
    return respond
}



//export modules out of the file
module.exports = {
    changeCity,
    makeRequest
}