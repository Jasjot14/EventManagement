import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AddpostService } from '../../addpost.service';
import { EventModel } from 'src/app/models/event';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  event: EventModel;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _addpostservice:AddpostService

     
  ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
    
            Title: ['',Validators.required],
            date:['',Validators.required],
            Description:['',Validators.required],
            CategoryID:['',Validators.required]
      });

      this.loginForm.controls['date'].setValue(this.currentDate());
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  currentDate(): any {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
  }
    console.log(this.loginForm.value);
       this._addpostservice.register(this.loginForm.value)
      .subscribe(
        response => {
          if(response){
            alert('event created');
            console.log('success',response);
          }else{
            alert('Please check for valid input entered');
          }
        },
        error => {
          alert('Error!');
        }
      );
      }
  }


