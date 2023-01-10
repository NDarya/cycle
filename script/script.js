let chars = ['a', 'a', 'a', 'a']
let sumChars = []
for (item of chars)
sumChars[item] = sumChars[item] ? sumChars[item] + 1 : 1
console.log(sumChars);


 
let notRight = ['hello', null, 0, true, false, 1, undefined, '', NaN]
let right = []
for (item of notRight){
    if (item !== false || item === 'string'){
        right.push(item);
    } 
    console.log(right);
}



let notUnique = ['a', 'b', true, 'a', false, 'b', true]
let unique = notUnique.filter((item, index) => {
    return notUnique.indexOf(item) === index
})

console.log(unique);


let arr = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

for(i = 0; i < arr.length; i++) 
    if (arr[i] === arr2[i]){
       console.log('good')
    }  
   