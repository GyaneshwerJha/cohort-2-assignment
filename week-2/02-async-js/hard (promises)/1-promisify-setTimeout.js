/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseBody(resolve) {
    setTimeout(() => {
        resolve(`Promise resolved after ${n} seconds`);
    }, n * 1000);
}

function wait(n) {
    return new Promise(promiseBody);
};

const n = 5;

wait(n).then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
});