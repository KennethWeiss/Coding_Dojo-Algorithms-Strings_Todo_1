// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(arr){
    return arr.split(" ").join("");
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// You are allowed to use isNaN() and Number().

function getDigits(string){
    let newstr = ""
    for (let s in string){
        if(string[s]==Number(string[s])){
            newstr += string[s];
        }
    }
    return newstr;
}

console.log(getDigits("Os1a3y5w7h9a2t4?6!8?0")) 