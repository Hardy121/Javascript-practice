let sentence = "The quick brown fox jumps over the lazy dog"
function longestWord(sentence) {
    const words = sentence.split(" ");
    let isLongestWord = "";
    let countWord = 0
    for(const item of words) {
        if(item.length > countWord){
            countWord = item.length
            isLongestWord = item
        }
    }
    return isLongestWord
}
longestWord(sentence)