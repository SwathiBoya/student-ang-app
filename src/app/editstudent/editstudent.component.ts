import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private studentService : StudentService,private router: Router) { }
  id:any;
  private sub: any;
  student:any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['rn']; // (+) converts string 'id' to a number
      console.log("rollno is "+this.id);
      this.student = this.studentService.getStudentByRollNo(this.id);

      // In a real app: dispatch action to load the details here.
   });
  }
  onEditStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/student']);
  }
}
