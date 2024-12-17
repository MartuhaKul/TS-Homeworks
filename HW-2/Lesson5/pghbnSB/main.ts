let minNum:(numbers:number[])=>number  = (numbers:number[]):number => {
    let min:number = numbers[0];
    for (let i:number = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
};

console.log(minNum([2, 4, 1, 19]));
