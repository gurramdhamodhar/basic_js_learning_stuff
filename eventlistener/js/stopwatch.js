const number_counting = document.querySelector(".count")
const start_counter = document.querySelector(".start")
const stop_counter = document.querySelector(".stop")
const reset_counter = document.querySelector(".reset")

const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")



let count = 0
let hour1 = 0
let minute1 = 0

let intervalid;

let start = () => {
    intervalid = setInterval(() => {
        count++;
        number_counting.innerHTML = count;              
        if(count==60){
            count = 0;
            number_counting.innerHTML = ":  " + count;
            minute1++;
            minute.innerHTML = minute1 + ":" ;
            count++;
            number_counting.innerHTML = ":  " + count;
            if(minute1==60){
                minute1 = 0
                minute.innerHTML = minute1 + ":" ;
                hour1++;
                hour.innerHTML = hour1 + "   :" ;    
            }
        }
    }, 1000);
}

function reset(){
    count = 0;
    hour1 = 0
    minute1 = 0
    clearInterval(intervalid);
    number_counting.innerHTML = count ;
    minute.innerHTML = minute1 +":" ;

}

function stop(){
    clearInterval(intervalid);
}


start_counter.addEventListener('click',start)
reset_counter.addEventListener('click',reset)
stop_counter.addEventListener('click',stop)