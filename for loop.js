// create a bill that customer to know how many items are taken, with total amount to be paid to shop .
var Company_name = "Welcome to jiomart"
var thank = "thanks for shopping, visit again"
var values = {
    rice : 200,
    vegetables : 100,
    oil : 60,
    masala_powder : 20,
}
var rate = [];
var items = ["rice", "vegetables", "oil", "rice", "oil"];

for(let i=0;i<items.length;i++){
    switch (items[i]) {
        case "rice":
            rate.push(values.rice);
            break
        case "vegetables":
            rate.push(values.vegetables);
            break
        case "oil":
            rate.push(values.oil);
            break
        case "masala_powder":
            rate.push(values.masala_powder);
            break
    }
}

var sum = 0;
for(let i=0;i<items.length;i++){
    sum = sum + rate[i];
}

var data = [];
for (let i = 0; i < rate.length; i++) {
    data.push({ Item: items[i], Rate: rate[i]});
}

console.table(data);

console.log(`   
${Company_name}
total items: ${items.length} 
and total amount to pay: ${sum}
${thank}`);

