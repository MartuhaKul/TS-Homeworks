let book1: { title: string, pageCount: number, genre: string, author: { name: string, age: number }[] } = {
    title: 'Assistant',
    pageCount: 366,
    genre: 'thriller',
    author: [
        {
            name: 'Tess Gerritsen',
            age: 71
        }
    ]
}
let book2: { title: string, pageCount: number, genre: string, author: { name: string, age: number }[] } = {
    title: 'The fourth wing',
    pageCount: 524,
    genre: 'fantasy',
    author: [
        {
            name: 'Rebecca Yarros',
            age: 43
        }
    ]
}
let book3: { title: string, pageCount: number, genre: string, author: { name: string, age: number }[] } = {
    title: 'Murder on the Orient Express',
    pageCount: 288,
    genre: 'detective',
    author: [
        {
            name: 'Agatha Christie',
            age: 85
        }
    ]
}

console.log(book1, book2, book3)