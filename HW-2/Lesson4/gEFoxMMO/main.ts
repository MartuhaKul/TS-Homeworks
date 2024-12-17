function arrayOfPrimitives(arr: (number | string | boolean)[]): void {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

let arrlist: (number | string | boolean)[] = [1, "Hello", true, 42, "World", false];
arrayOfPrimitives(arrlist);
