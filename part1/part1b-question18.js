// prints out current time (accuracy is seconds)
function currTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// repeatedly calls currTime, with 1000 milliseconds (1 second)
// delay between each call
setInterval(currTime, 1000);