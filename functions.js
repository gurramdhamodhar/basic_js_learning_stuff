// task 6: using functions perform to show role of a user using function call by name role

var getuserrole = function(name,role){
    switch(role){
        case "admin":
            console.log(`${name}: Having all powers`);
            break
        case "subadmin":
            console.log(`${name} : Have to monitor. Conducted events,tests, activites`);
            break
        case "student":
            console.log(`${name} : Have to perform activites, accesing data`);
            break
    }
}

getuserrole("principal","admin");
getuserrole("teachers","subadmin");
getuserrole("student","student");
