//bringin functions from other files
const {getTitle, input} = require('./view')

//function that runs the programs and functions files, the parameter is an array with the name of the places
async function sistem(array){

    //printing title
    console.log('\n')  
    console.log(getTitle())
    console.log('\n\n')

    //asking inputs
    let cities =array
    let answer = await input(array)
    cities.push(answer.city)
    console.log(cities)

    //recursivity for creating and infinite loop
    sistem(cities)
    console.clear()
   

}

sistem([])
