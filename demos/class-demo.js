class Student {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }

    display() {
        console.log(`Student: ${this.name}, Dept: ${this.dept}`);
    }
}

const s = new Student("Kamali", "CSE");
s.display();
