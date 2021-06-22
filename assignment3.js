function part1(){
    const printName = (name) => "Hi "+ name;
    console.log(printName("John")); 
}

function part2(){
    const printBill = (name,bill) => `Hi ${name},please pay: ${bill}`;
    console.log(printBill("John","$200"));
}

function part3(){
    const person = {
        name: "Noam Chomsky",
        age: 92

    }

    let {name,age} = person;
    console.log(name);
    console.log(age);
}

part1();
part2();
part3();