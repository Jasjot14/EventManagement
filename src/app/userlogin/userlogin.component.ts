import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { first } from 'rxjs/operators';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userloginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _userloginservice:UserloginService
     
  ) {
      // redirect to home if already logged in
     
  }

  ngOnInit() {
      this.userloginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

     
      
  }


  get f() { return this.userloginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
          if (this.userloginForm.invalid) {
          return;
      }

      this.loading = true;
      this._userloginservice.register(this.userloginForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigateByUrl('/userdashboard');
          },
      )}


}
