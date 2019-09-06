import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { MustMatch } from 'src/app/must-match.validator';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submitted=false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _registrationservice:RegistrationService
     
  ) {
      // redirect to home if already logged in
     
  }

  ngOnInit() {
      this.registrationForm = this.formBuilder.group({
        UserID:null,
           title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
          validator: MustMatch('password', 'confirmPassword')
      });
      
  }

  get f() { return this.registrationForm.controls; }

  onSubmit()  {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
  alert("New User Created");
    console.log(this.registrationForm.value);
    
    this._registrationservice.register(this.registrationForm.value)
      .subscribe(
      
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}
