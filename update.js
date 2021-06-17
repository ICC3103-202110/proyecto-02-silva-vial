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
async function makeRequest(link) {

    const config={
        method: 'get',
        url: link
    }
   
    let call= await axios(config)
    let respond= call.data.main
    
    return respond
}



//export modules out of the file
module.exports = {
    changeCity,
    makeRequest
}