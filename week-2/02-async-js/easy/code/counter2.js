// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let time = 1;

function counter(){
    console.log(time);
    time++;

    setTimeout(counter, 1* 1000);
}

counter();