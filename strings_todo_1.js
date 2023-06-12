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
        console.log(newstr)
        }
    }

getDigits("abc8c0d1ngd0j0!8") 