//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get Name(){
		return this._name;
	}
	set Age(age){
		this._age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is studying` )
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
