// create a array to take cities
// print metropolitan 
// print add famous places
// print what famous on city by conditions

var famousplaces = []; // created empty 
var cities = ["hyderabad", "chennai", "mumbai", "delhi"] // assign values to array

for(let i=0;i<cities.length;i++){
    if (cities[i] === "hyderabad"){
        famousplaces.push("billa mandir"); // adding places
        console.log(`${famousplaces[i]} is a famous temple in ${cities[i]}`);
    }
    else if(cities[i] === "delhi"){
        cities.pop()           // delete an element at end
        console.log(cities)
    }
}

cities[3] = "delhi"; // adding to city to the cities
console.log(cities)
