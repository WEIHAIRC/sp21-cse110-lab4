// Question 8
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i=0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);

        // testing whether i is accessible inside for loop body
        // console.log(i);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

// Question 8
var returned = discountPrices([100, 200, 300], 0.5);
console.log(returned.length);
console.log(returned[0]);
console.log(returned[1]);
console.log(returned[2]);