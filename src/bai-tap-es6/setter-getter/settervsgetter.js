class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}

Object.defineProperty(Person.prototype, 'name', {
    get: function () {
        return `${this.firstName} ${this.lastName}`
    },
    set: function (name) {
        let split = name.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
    }
});

let user = new Person('jon', 'abrams');
console.log(user.name); // outputs "jon abrams"

user.name = "Jon Abrams";
console.log(user.name); // outputs "Jon Abrams"