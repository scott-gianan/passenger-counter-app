const btn = document.querySelectorAll('.btn');
const counter = document.getElementById('counter');
const entries = document.getElementById('entries');
let count = 0;


const increment = () => {
    count++;
    counter.textContent = count;
}

const reset = () => {
    count = 0;
    counter.textContent = count;
}

const save = () => {
    if(count===0){
        return false;
    } else {
        entries.textContent += `${count}-`;
        count = 0;
        counter.textContent = count;
    }
}
