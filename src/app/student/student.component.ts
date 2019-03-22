import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute,private router:Router) { }
 
  ngOnInit() {
  }
  student = this.studentService.getStudentList();  
  onDelete(student){
    this.studentService.deleteStudent(student);
  }
  deleteAll(){
    this.studentService.deleteAllStudent();
  }
  editStudent(s){
    this.router.navigate(['/editstudent/'+s.rn]);
  }
 
}
