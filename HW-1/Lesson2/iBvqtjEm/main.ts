let x: boolean = false;
let result: string | boolean = x;

if (!x) {
    result = 'default';
}
console.log(result);
