import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:any={};

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }
  
  onAddUpdate(student){
    this.studentService.addStudent(student);
    this.router.navigate(['/student']);
  }
  
}
