function swap(arr: number[], index1: number, index2: number): false | number[] {
    if (index1 < arr.length && index2 < arr.length) {
        let num = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = num;

        return arr;
    }

    return false;
}

console.log(swap([11, 22, 33, 44], 0, 1));