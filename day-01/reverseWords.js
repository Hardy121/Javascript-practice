const stc = "Hello World"
function reverseWords(sentence) {
    let reverseWord = ""
    for (let i = sentence.length; i > 0; i--) {
        reverseWord += sentence[i]; 
    }       
    return reverseWord
}
console.log(reverseWords(stc))