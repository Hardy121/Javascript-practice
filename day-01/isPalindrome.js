let str = "level"
function isPalindrome(str) {
    const tempStr = str;
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return tempStr === reverseStr ? true : false
}
isPalindrome(str)