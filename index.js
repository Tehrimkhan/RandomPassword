

const msgs1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
               "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const msgs2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
               "n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const msgs3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const msgs4 = ["~","`","!","@","#","$","%","^","&","*","(",")","_",
               "-","+","=","{","[","}","]",",","|",":",";","<",">",
               ".","?","/" ]
let useAllEl = document.getElementById("useAll-el")
let symbolsEl = document.getElementById("symbols-el")
let numbersEl = document.getElementById("numbers-el")
let passEl1 = document.getElementById("password-el1")
let passEl2 = document.getElementById("password-el2")
let msg = ""

function refreshPass(){
    passEl1.textContent = ""
    passEl2.textContent = ""
    useAllEl.checked = false
    symbolsEl.checked = false
    numbersEl.checked = false
    document.getElementById("length-el").value = ""
}

function genPass(msg){
    let lengthEl = parseInt(document.getElementById("length-el").value)
    let pass1 = ""
    let pass2 = ""
    for(let i = 0; i<lengthEl; i++){
        let rndPass1 = Math.floor(Math.random() * msg.length)
        pass1 += msg[rndPass1]
        let rndPass2 = Math.floor(Math.random() * msg.length)
        pass2 += msg[rndPass2]
    }
    passEl1.textContent = pass1
    passEl2.textContent = pass2
}

function randomPass(){
    if(useAllEl.checked == true){
        msg = msgs1.concat(msgs2, msgs3,msgs4)
        symbolsEl.checked = false
        numbersEl.checked = false
        genPass(msg)
    }
    else if(symbolsEl.checked == true){
        msg = msgs1.concat(msgs2, msgs4)
        numbersEl.checked = false
        useAllEl.checked = false
        genPass(msg)
    }
    else if(numbersEl.checked == true){
        msg = msgs1.concat(msgs2, msgs3)
        useAllEl.checked = false
        symbolsEl.checked = false
        genPass(msg)
    } 
    else{
        alert("Please select a checkbox")
    }
}