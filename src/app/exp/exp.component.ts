import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {


constructor(private formBuilder: FormBuilder) { }
status = 'You haven\'t submitted yet';

CompanyName='';
Postion='';
ResoneForLeaving='';
submitted = false;
registerForm: FormGroup;

signup() {

   this.status = 'Your request has been submitted';
   
}
   
ngOnInit() {
  this.registerForm = this.formBuilder.group({
    CompanyName: ['', Validators.required],
    Postion: ['', Validators.required],
    ResoneForLeaving: ['', [Validators.required, Validators.email]],
  });
}
   
get f() { return this.registerForm.controls; }
   
onSubmit() {

  this.submitted = true;
  
  console.log( this.CompanyName);
  console.log( this.Postion);
  console.log( this.ResoneForLeaving);

   
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
   
  alert('Your request has been submitted for approval')
}
}
  




