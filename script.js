const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass_1")
let pass2El = document.getElementById("pass_2")
let lengthEL = document.getElementById("length")
length = 0
function getLength(e) {
    length = e.target.value
}
function genPassword() {
    console.log(length)
    password1 = ""
    password2 = ""
    for (count=0; count<length; count+=1) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    pass1El.textContent = password1
    pass2El.textContent = password2
 }