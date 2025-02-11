//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get Name(){
		return this.name;
	}
	set Age(){
		this.age=newAge;
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
