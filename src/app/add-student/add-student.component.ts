import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let student = this.studentService.getStudent(param.id);
          if(student){
            this.studentForm.setValue(student);
            this.isEdit = true;
            }
          else this.router.navigate(['/students'])
        }
      })
  }

  resetForm(){
    console.log('reset',this.studentForm)
    this.studentForm.reset();
  }

  add(){
    if(this.studentForm.valid){
      this.studentService.studentList.push(this.studentForm.value);
      this.resetForm();
      console.log('this.studentService.studelost',this.studentService.getStudents())}
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.studentForm.valid){
      if(this.studentService.studentEdit(this.studentForm.value)){
        this.router.navigate(['/students'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
  
}

