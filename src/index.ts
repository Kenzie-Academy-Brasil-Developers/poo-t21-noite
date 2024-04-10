// POO - Programação Orientada a Objetos
// Organizar o nosso código (encapsulamento)

// Classe - propriedades (variáveis) e métodos (semelhantes a funções)

// Javascript / Typescript

// PascalCase

// this - referência a própria classe
/*
class Person{
    name: string;
    age: number;

    // executado quando a classe iniciar
    constructor(name: string, age: number){
        console.log("Executa na instância da classe");
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log("Olá!")    
    }

    sayMyName(){
        console.log(this.name);
        console.log(this.age);
    }
}
*/

const personA = new Person('Alex', 33);
const personB = new Person('Thiago', 18);
personA.sayMyName();
personB.sayMyName();


