// Herança
// Polimorfismo

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayMyName(){
        console.log(this.name);
    }
}

class Student extends Person{
    courseModule: string;

    constructor(name: string, age: number, courseModule: string){
        super(name, age);
        this.courseModule = courseModule;
    }

    sayMyModule(){
        console.log(this.courseModule);
    }
}

class Teacher extends Person{

}

class Employee extends Person{
    job: string;

    constructor(name: string, age: number, job: string){
        super(name, age);
        this.job = job;
    }

    sayMyName(){
        console.log(`Olá, eu sou ${this.name}, ${this.job}`);    
    }
}

// Estático - Suportado pelo Typescript / Javascript
// Dinâmico - Suportado pelo Javascript (não suportado pelo Typescript)

const employee = new Employee("Alex", 33, "Instrutor e Programador");
const student = new Student("Jonathan", 19, "M4");