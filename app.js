const length=12;
const passwordBox=document.getElementById("placeholder");
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const allChars=upperCase+lowerCase+number;
function createPassword(){
    let placeholder="";
    placeholder+=upperCase[Math.floor(Math.random()*upperCase.length)];
    placeholder+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    placeholder+=number[Math.floor(Math.random()*number.length)];
    while(length>placeholder.length){
        placeholder+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=placeholder;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

