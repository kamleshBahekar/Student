import { Component, OnInit } from '@angular/core';
import { Student } from '../student-interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  studentList: Student[];
  
  constructor(private studentService: StudentService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
    }

}
