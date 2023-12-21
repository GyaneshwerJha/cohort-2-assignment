/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("resolved after 1 sec");
            resolve(); // Resolve the promise
        }, 1 * 1000);
    });
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("resolved after 2 sec");
            resolve(); // Resolve the promise
        }, 2 * 1000);
    });
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("resolved after 3 sec");
            resolve(); // Resolve the promise
        }, 3 * 1000);
    });
}

async function calculateTime() {
    const startTime = Date.now();

    // Using Promise.all to wait for all promises to resolve
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    console.log(`All promises resolved in ${totalTime} milliseconds`);
}

// Example usage
calculateTime();
