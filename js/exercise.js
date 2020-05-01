 const Person = function(){
    this.name = '';
    this.dateOfBirth = '';
    this.getName = function(){
        return this.name;
    }
    this.setName = function(newName){
        this.name = newName;
    }
}

Person.prototype.toString = function(){
    return { Name: this.getName(), DateOfBirth: this.dateOfBirth};
}
const peter = new Person();
peter.setName('Peter');
peter.dateOfBirth = '1985-11-10';

console.log(peter.toString());
