function sortNums(array:number[], direction:string):number[] {
    if (direction === 'ascending')
        return nums.sort((a:number, b:number):number => a - b);
    if (direction === 'descending')
        return nums.sort((a:number, b:number):number => b - a)
}

let nums:number[] = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));