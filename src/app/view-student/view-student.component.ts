import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student-interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  student: Student;
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.student = this.studentService.getStudent(param.id);
        }
      })
      
    }
}
