function sum(arr:number[]):number {
    let totalSum:number = 0;
    for (const item of arr) {
        totalSum = totalSum + item;
    }
    return totalSum;
}

console.log(sum([1, 2, 10]));