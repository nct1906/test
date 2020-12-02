
let centuryFromYear=function(year){
    let century;
    if(year%100){
        century=Math.ceil(year/100)
    }
    else{
        century=year/100;
    }
    return century;
}
console.log(centuryFromYear(1700));
//return Math.ceil(year/100)

let checkPalindrome=function(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome('abaa'))


let adjacentElementsProduct=function(arr){
    let product=arr[0]*arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]*arr[i+1]>product){
            product=arr[i]*arr[i+1]
        }
    }
    return product;
}
console.log(adjacentElementsProduct([3,6,-2,-5,7,8]))

let oddArr=[];
let inputArray=function(arr){
    let i=0;
    
    let newArr=arr;
    if(arr[i]&&arr[i]%2){
        oddArr.push(arr[i])
        console.log(oddArr)
      
       newArr=arr.splice(arr[i])
       
        inputArray(newArr);
    }
    else if(arr[i]){
       
        newArr=arr.splice(arr[i])
        
         inputArray(newArr);
    }
   
    return oddArr;
}
console.log(inputArray([3,5,6,-2,-2,7,3,8,10,11]))
//filter
