import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormGroup,FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit{
  constructor(private student:StudentsService){}
  addStudent = new FormGroup({
    name  : new FormControl(''),
    email: new FormControl(''),
    id:new FormControl('')
});
message:boolean = false
 SaveData(){
  //console.log(this.addStudent.value)
  this.student.saveStudentData(this.addStudent.value).subscribe((result:any)=>{
   // console.log(result);
   this.message = true;
   this.addStudent.reset({});

  })
 }
 removeMessage(){
  this.message = false;
 }
ngOnInit(): void {
    
}

}
