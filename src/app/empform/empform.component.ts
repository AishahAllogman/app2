import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EMPformComponent implements OnInit {

     
  constructor(private formBuilder: FormBuilder) { }
  status = 'You haven\'t send it  yet';
  name = '';
  firstName='';
  lastName='';
  password='';
  email='';
  submitted = false;
  registerForm: FormGroup;
  ontyping(event:Event) {
     
    this.name = (<HTMLInputElement>event.target).value;
  }
  signup() {
  
     this.status = 'Your request has been submitted ';
     
  }
     
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
     
get f() { return this.registerForm.controls; }
     
onSubmit() {
  
    this.submitted = true;
    
    console.log( this.name);
    console.log( this.firstName);
    console.log( this.lastName);
    console.log( this.password);
    console.log( this.email);
     
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
     
    alert('Your request has been submitted for approval')
}
}
    




