/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    /* The Date object in JavaScript represents a specific point in time, including both date and time components. 
    When you subtract one Date object from another, you get the difference in milliseconds. The result of endTime - startTime is 
    the time difference in milliseconds, considering both the date and time components.*/
    const startTime = new Date();

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date();

    const remTime = (endTime - startTime) / 1000;

    return remTime;
}

console.log(calculateTime(1000000000));