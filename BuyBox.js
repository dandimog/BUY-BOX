
let count = 1;
const countEl = document.getElementById("product-counter");

function plus(){
    count++;
    countEl.value = count;
}

function minus(){
    if (count > 0) {
        count--;
        countEl.value = count;
    }
}