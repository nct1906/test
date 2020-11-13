//Bai 1
let findOppositeNumber=function(a,b){
    let num;
    if(b>(a/2)){
        num=(b-a/2)
    }
    else{
        num=(b+a/2)
    }
    return num;
}
console.log(findOppositeNumber(10,6))

//Bai 2
let merge2String=function(string1,string2){
    let arr=[];
    for(i=0;i<string1.length||i<string2.length;i++){
            if(string1[i]){arr.push(string1[i])}
            if(string2[i]){arr.push(string2[i])}
            
    }
    let result=arr.join('');
    return result;
}
console.log(merge2String('abc','123'))