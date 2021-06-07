//updates the cities in fuction of the user's inputs
function changeCity(desire, location, array){
    if(desire==='Add city'){
        array.push(location)  
    }else if(desire==='Delete city'){
        array.splice(array.indexOf(location), 1)
    }
    return array
}




//export modules out of the file
module.exports = {
    changeCity
}