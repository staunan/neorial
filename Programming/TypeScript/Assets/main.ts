class Student{
	name:string;
	constructor(name:string){
		this.name = name;
	}
	getStudent():object{
		return {
			name : this.name
		};
	}
	updateStudent(name:string):void{
		this.name = name;
	}
}

class Boy extends Student{
	rollNumber:number;
	constructor(name:string,rollNo:number){
		super(name);
		this.rollNumber = rollNo;
	}
	getStudent():object{
		return {
			name : this.name,
			rollNumber : this.rollNumber
		};
	}
	updateStudent(name:string, rollNo?:number):void{
		this.name = name;
		this.rollNumber = rollNo;
	}
}
let Amit = new Boy('Amit',1);
Amit.updateStudent("");
console.log(Amit.getStudent()); // {name : "Amit Das", rollNumber : undefined}









