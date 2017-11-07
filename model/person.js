module.exports = class Person{
    constructor(id, firstname, lastname, age, isLandlord, appartmentIds){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.isLandlord = isLandlord || false
        this.appartmentIds = appartmentIds || [];
    }

    static create(person){
        return new Person(person.id, person.firstname, person.lastname,
        person.age, person.isLandlord, person.appartmentIds);
    }
}