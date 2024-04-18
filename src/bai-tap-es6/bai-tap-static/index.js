class Student {
    constructor(fullname, age) {
        this.fullname = fullname
        this.age = age;
    }
    getmultiplication(a) {
        return (a * 3)
    }
}

let luan = new Student("Luân", 18)
let ngoc = new Student("Ngọc", 18)
luan.getInfo()
ngoc.getInfo()