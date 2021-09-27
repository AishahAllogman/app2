import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

     
constructor(private formBuilder: FormBuilder) { }
status = 'You haven\'t   submitted yet';
major='';
College='';
YEAR='';
degree='';
submitted = false;
registerForm: FormGroup;

signup() {

   this.status = 'Your request has been submitted!';
   
}
   
ngOnInit() {
  this.registerForm = this.formBuilder.group({
      degree: ['', Validators.required],
      major: ['', Validators.required],
      College: ['', [Validators.required]],
      YEAR: ['', [Validators.required]]
  });
}
   
get f() { return this.registerForm.controls; }
   
onSubmit() {

  this.submitted = true;
  console.log( this.degree);
  console.log( this.major);
  console.log( this.College);
  console.log( this.YEAR);
   
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
   
  alert('Your request has been submitted for approval')
}
}
  





