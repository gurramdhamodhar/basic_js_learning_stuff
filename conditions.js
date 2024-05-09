// task 3: create to display is user signed in on google, fackbook, instagram using conditions

var google = true;
var fackbook = true;
var instagram = false;
var status;

if (google==true && fackbook==true){
     status = "instagram is not logged in";
}
else if(instagram==true && fackbook==true){
     status = "google is not logged in";
}
else{
    status = "facebook is not logged in";
}

if (google && fackbook && instagram ){
    console.log(`is user logged in all accounts : yes`);
}
else{
    console.log(`is user logged in all accounts : no`);
    console.log(`status : ${status}`)
}
