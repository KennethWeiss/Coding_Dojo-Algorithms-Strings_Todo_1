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
// console.log(getDigits("Os1a3y5w7h9a2t4?6!8?0")) 

// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letter of the word capitalized). 
// You are allowed to use .split() and .toUpperCase().
function acronym(str){
    str = str.toUpperCase()
    let splitstr = str.split(" ")
    let acro = ""
    for(let s in splitstr){
        if(splitstr[s][0] === undefined){
            continue
        }
        else {
            acro += splitstr[s][0];
        }
    }
    return acro;
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "))

function countNonSpaces(str){
    spaces = 0;
    for(s in str){
        if(str[s]===" "){
            continue;
        }
        else{
            spaces++;
        }
    }
    return spaces;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))