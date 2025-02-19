const os =require('os')
var sec=os.uptime();
var min=sec/60;
var hours=min/60;
var days =hours/24;
console.log(`${days} days`);
console.log(`${hours} hours`);
console.log(`${min} minutes`);