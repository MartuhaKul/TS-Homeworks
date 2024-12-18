let str1:string = 'hello world';
let str2:string = 'lorem ipsum';
let str3:string = 'javascript is cool';

let string:string[] = [str1, str2, str3]
for (const str of string) {
    console.log(str.length);
}