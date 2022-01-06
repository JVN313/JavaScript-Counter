//document.getElementById("count-el").innerText = 5
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.innerText = count
}

function decrease(){
    count -= 1
    countEl.innerText = count
    if (count < 0) {
        count = 0
        countEl.innerText = count
    }
}

function save(){
    let update = " " + count+" - "
    saveEl.innerText +=update
    console.log(count)
}

function Reset(){
    count = 0
    countEl.innerText= count
}