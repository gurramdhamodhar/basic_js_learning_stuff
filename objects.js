var user = {
    name : "dhamodhar",
    age:21,
    role:"software developer",
    pagevisit : 20,
    courses : [],
    coursetaken : function(coursename){
        this.courses.push(coursename)
    },
    coursecount : function(){
        console.log(`${this.name} is taken ${this.courses.length} courses in our portol`)
    }
}

user.coursetaken("js");
user.coursecount();
