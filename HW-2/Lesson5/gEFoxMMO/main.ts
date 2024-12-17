let arrayOfPrimitives: (arr: (string | number | boolean) [])=> void = (arr: (string | number | boolean)[]): void => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};

let arrlist:(string|number|boolean)[] = [1, "Hello", true, 42, "World", false];
arrayOfPrimitives(arrlist);