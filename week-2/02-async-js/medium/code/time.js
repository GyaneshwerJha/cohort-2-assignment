function getCurrentTime() {
    const now = new Date();

    // format time in HH:MM:SS
    const formattedTime24 = now.toLocaleTimeString('en-us', { hour12: false });

    // Format time in HH:MM:SS AM/PM
    const formattedTime12 = now.toLocaleTimeString('en-us');

    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);
}

setInterval(getCurrentTime, 1 * 1000);
setTimeout(getCurrentTime, 0);