type User = {
    name: string;
    age: number;
    status: boolean;
};

let users: User[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


document.write('<h3>Користувачі зі статусом true:</h3>');
users.forEach((user: User):void => {
    if (user.status) {
        document.write(`<p>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</p>`);
    }
});

document.write('<h3>Користувачі зі статусом false:</h3>');
users.forEach((user: User):void => {
    if (!user.status) {
        document.write(`<p>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</p>`);
    }
});
document.write('<h3>Користувачі, які старші за 30 років:</h3>');
users.forEach((user: User):void => {
    if (user.age > 30) {
        document.write(`<p>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</p>`);
    }
})