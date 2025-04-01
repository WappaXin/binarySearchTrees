export function sortAndDeleteDuplicatesOf(array){
    let mergedArray = mergeSort(array);
    console.log(mergedArray);
    return mergedArray;
} 

function mergeSort(unsortedArray){
    const low = 1;
    const high = unsortedArray.length;

    if(unsortedArray.length <= 1) return unsortedArray;

    let midpoint;
    if(high%2 === 0){midpoint = high/2;}
    if(high%2 === 1){midpoint = Math.floor(high/2);}

    const leftArray = mergeSort(unsortedArray.slice(0,midpoint));
    const rightArray = mergeSort(unsortedArray.slice(midpoint));

    const mergedArray = merge(leftArray , rightArray);

    return mergedArray;
}

function merge(arrayA, arrayB){
    let i = 0;
    let j = 0;
    let mergedArray = [];
    let itemsInMergedArray = arrayA.length + arrayB.length;

    for(let a = 0 ; a < itemsInMergedArray ; a++){

        if(i === arrayA.length){
            for(let b = j ; b < arrayB.length ; b++){
                mergedArray.push(arrayB[b]);
            }
        }else if(j === arrayB.length){
            for(let b = i ; b < arrayA.length ; b++){
                mergedArray.push(arrayA[b]);
            }
        }

        if(mergedArray.length === itemsInMergedArray) return mergedArray;

        if(arrayA[i] < arrayB[j]){
            mergedArray.push(arrayA[i++]);
        }else if(arrayA[i] > arrayB[j]){
            mergedArray.push(arrayB[j++]);
        }else if(arrayA[i] === arrayB[j]){
            // only push one if duplicates exist
            mergedArray.push(arrayA[i++]);
            j++;
            itemsInMergedArray--;
        }
    }

    return mergedArray;
}