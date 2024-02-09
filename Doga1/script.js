// All or Nothing
function possiblyPerfect(key,answers) {
    let blank = 0;
        let points = 0;
        for (let i = 0; i < answers.length; i++) {
            if(key[i] == answers[i])
            {
                points++;
            }
            if(key[i] == '_')
            {
                blank++;
            }
        }
    
        if(points == (key.length-blank) || points == 0)
        {
            return true
        }
        else{ return false}}



console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    numbers.sort();
    let middle = 0;
    let mean = 0;
    for (let i = 0; i < numbers.length; i++) {
        mean += numbers[i]
    }
    for (let y = 0; y < Math.ceil(numbers.length/2); y++) {
        middle = numbers[y];
    }
 mean = mean / numbers.length;
    if(mean > middle)
    {
        return "mean"
    }
    else if(mean < middle)
    {
        return "median"
    }
    else if(mean == middle)
    {
        return "same"
    }
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    let swapped = [];
    let eleje = [];
    let vege =  [];
    let fel = Math.ceil(arr.length/2)
    if(fel % 2 == 1)
    {
    for (let i = 0; i < fel- 1; i++) {
        eleje.push(arr[i]);
    }
    for (let i = fel; i < arr.length; i++)
    {
      vege.push(arr[i]);
    }
}
else{
    for (let i = 0; i < fel; i++) {
        eleje.push(arr[i]);
    }
    for (let i = fel; i < arr.length; i++)
    {
      vege.push(arr[i]);
    }
}
for (let i = 0; i < vege.length; i++) {
    swapped.push(vege[i]);  
}
    
    if(fel % 2 == 1)
    {
        swapped.push(arr[fel - 1]);
    }
    for (let i = 0; i < eleje.length; i++) {
        swapped.push(eleje[i]);  
    }
    return swapped
    
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);