import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students = [
    {
      rn:1,
      dob:'15th-Aug',
      firstName: 'Swathi',
      lastName: 'Boya',
      parentName: 'RamaDevi',
      parentPhone:'89898989889',
      address:'Kurnool' 
    },
    {
      rn:2,
      dob:'15th-Aug',
      firstName: 'Swathi',
      lastName: 'Boya',
      parentName: 'RamaDevi',
      parentPhone:'89898989889',
      address:'Kurnool' 
    }
  ]
  getStudentByRollNo(rn){
    console.log(rn);
    for(var i=0;i<this.students.length; i++){
      if(this.students[i].rn == rn){
       return this.students[i];
      }
    }
  }
  getStudentList(){
    return this.students;
  }
  
  deleteStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rn == student.rn){
        this.students.splice(i,1);
        break;
      }
    }
  }
  deleteAllStudent(){
    this.students.length=0;;
  }

  addStudent(student){
      student.rn =Math.round(Math.random()*1000);
      this.students.push(student);
  }

 updateStudent(student){
   
   for(var i=0;i<this.students.length;i++){
    if(this.students[i].rn == student.rn){
      
      this.students[i] = student;
      break;
    }
   }
 }

}
