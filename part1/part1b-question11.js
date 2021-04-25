// Question 11
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i=0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);

        // testing whether i is accessible inside for loop body
        // console.log(i);
    }

    //console.log(i);
    console.log(length);
    // Test const's scope
    //console.log(discountedPrice);

    return discounted;
}

// Question 11
var returned = discountPrices([100, 200, 300], 0.5);
console.log(returned.length);
console.log(returned[0]);
console.log(returned[1]);
console.log(returned[2]);