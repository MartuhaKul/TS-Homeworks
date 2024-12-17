
function stringToarray(str:string):string[]{
    return str.split(' ')
}
let str = 'Ревуть воли як ясла повні';
console.log(stringToarray(str))