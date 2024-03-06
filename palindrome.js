// function palindrome (String){
//     reversestring
// }

function isPalindrome(str) {
    
    const cleanedStr = str.replace( '').toLowerCase();

  
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage:
const exampleString = "malayalam";
if (isPalindrome(exampleString)) {
    console.log(`${exampleString} is a palindrome.`);
} else {
    console.log(`${exampleString} is not a palindrome.`);
}