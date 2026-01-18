const sentence = "We are vowels"
const vowels = ["a", "e", "i", "o", "u"]
function countVowels(str) {
    let count = 0
    for (let i = 0; i < sentence.length; i++) {
        if(vowels.includes(sentence[i])){
            count++
        } 
    }
    return count

}
console.log(countVowels(sentence))