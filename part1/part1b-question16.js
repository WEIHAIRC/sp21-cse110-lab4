let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,

};

// implement a for loop through statistics
// to check properties, and print out if needed
for (const property in statistics) {

    // if the property strats with the letter r
    if (property.startsWith('r')) {

        // print out the property's value
        console.log(statistics[property]);
    }

    // or if the value of that property is an odd number
    else if (statistics[property] % 2 == 1) {
        
        // print out the property's value    
        console.log(statistics[property]);
    }
}