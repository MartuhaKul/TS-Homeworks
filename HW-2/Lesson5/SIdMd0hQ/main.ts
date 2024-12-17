let logArrayElements:(arr:number[])=>void  = (arr:number[]):void => {
    for (const item of arr) {
        console.log(item);
    }
};

logArrayElements([1, 2, 3, 4]);