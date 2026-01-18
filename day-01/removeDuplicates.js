const array = [1, 2, 2, 3, 4, 4, 5]
function removeDuplicates(arr) {
    const duplicateRemoved = []
    for (let i = 0; i < arr.length; i++) {
        //   let isDuplicate = false;
        //   for (let j = 0; j < duplicateRemoved.length; j++) {
        //     if(arr[i] === duplicateRemoved[j]){
        //         isDuplicate = true;
        //         break
        //     }
        //   }
        //   if(!isDuplicate){
        //     duplicateRemoved.push(arr[i])
        //   }

        if (!duplicateRemoved.includes(arr[i])) {
            duplicateRemoved.push(arr[i])
        }
    }
    return duplicateRemoved
}
console.log(removeDuplicates(array))
