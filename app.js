let val;
const today = new item Date();

val = today.getMonth(); 
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliSeconds();
val = today.getTime();

let birthday = new.Date('9-27-2001 11:00:00');
birthday = new.Date('September 27 2001');

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2002);
birthday.setHours(11);
birthday.setMinutes(22);
birthday.setSeconds(50);


console.log(today);
console.log(val);