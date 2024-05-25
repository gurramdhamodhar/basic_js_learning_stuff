const courses = [
    {
        name: "complete python course",
        price: 2.1
    }, 
    {
        name: "complete dsa course",
        price: 2.9
    }, 
    {
        name: "complete c++ course",
        price: 2.8
    },

]

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach((course) =>{

        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-end")
        const price = document.createTextNode("$"+ course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    })
}

window.addEventListener("load",generateList)

const button1 = document.querySelector(".btn1")
button1.addEventListener("click", () =>{
    courses.sort((a,b) => a.price - b.price);
    generateList();
})

const button2 = document.querySelector(".btn2")
button2.addEventListener("click", () =>{
    courses.sort((a,b) => b.price - a.price);
    generateList();
})