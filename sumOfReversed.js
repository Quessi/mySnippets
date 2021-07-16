function sumOfReversed(arr){ 
    let resultArray=[];
    arr.forEach( element=>{
       thisResult=Array.from(element.toString());
       result = thisResult.reverse();
        for(let i =0; i< result.length; i++){
            if(result[i]==='0'){
                result.push('0');
                result.shift()
                i--;
            } 
            else break;
        }
        resultArray.push(result);
    }
    )
    let total = 0;
    resultArray.forEach(result=>{
   console.log(result)
        total+= (+result.join(''))
    })
    return total;
}
console.log(sumOfReversed([7,234,58100]))