// task1 : create a form using variables

const uid = 4475
var fname = "Gurram";
var lname = "Dhamodhar";
const age = 21;
const number  = 8888888888;
var address = "7-8953689";
var city = "Hyderabad"
var sex = 1;
switch(sex){
    case 1:
        sex = "male";
        var sex1 = "sir";
        break
    case 2:
        sex = "female";
        var sex1 = "madam";
        break
    default:
        console.log("Enter 1 for male and 2 for female");
        break
}
var agree = true;
console.log(`
    your unquie id is ${uid}
    your full name is ${fname} ${lname}
    your age is ${age} 
    your are eligible for join this group
    your entered address is ${address}, ${city}.
    your mobile number is ${number}
    your ${sex}
    your agree status to fill application is ${agree}
    I think your are agreed to our terms and conditions
    Thank you ${sex1} please continue to login.
`)
