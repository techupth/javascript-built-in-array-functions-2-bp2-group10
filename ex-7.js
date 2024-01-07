function isPalindrome(string) {
  // Start coding here
  let storedStringToArray;
  let storedReverseArray;
  let storedReversedArrayToString;
  let storedString = [];
  
  storedString = string;
  storedStringToArray = string.split(""); 
  storedReverseArray = storedStringToArray.reverse();
  storedReversedArrayToString = storedReverseArray.join("");

  if (storedString === storedReversedArrayToString) {
    return true;
  } else {
    return false;
  }
} 

//Example case 
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver"));  // false 

