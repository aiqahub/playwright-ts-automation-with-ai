class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        if (age >= 0) {
            this.age = age;
        } else {
            console.log("Age cannot be negative.");
        }
    }
}

let person = new Person("Alice", 30);
console.log(person.getName());
console.log(person.getAge());

person.setAge(35);
console.log(person.getAge());

http://staging:3000