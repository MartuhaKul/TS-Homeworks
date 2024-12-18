interface Course {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray:Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
interface CourseWithId extends Course {
    id: number;
}
let sortArr:Course[] = coursesAndDurationArray.sort((a:Course, b:Course):number => b.monthDuration - a.monthDuration)
console.log(sortArr)
let filterArr:Course[] = coursesAndDurationArray.filter((value:Course) => value.monthDuration > 5)
console.log(filterArr)
let mapArr:CourseWithId[] = coursesAndDurationArray.map((value:Course, index:number):CourseWithId => ({
    ...
        value,
    id: index + 1
}));
console.log(mapArr)