import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { GeteventbyidService } from '../geteventbyid.service';


@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
 event:any;
EventID:number;
param1:string;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _geteventbyid:GeteventbyidService
      ) {
            
       }
       

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

ngDoCheck(){
  this.param1 = this.route.snapshot.queryParams.id;
  this._geteventbyid.getEvents(this.param1)
  .subscribe(data => {
      this.event = data
    console.log(data);
  });

 }

currentDate(): any {
const currentDate = new Date();
return currentDate.toISOString().substring(0,10);
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onupdate(){

  //step 1: validate , evey data is here 
  console.log(this.loginForm.value);
  this._geteventbyid.update(this.loginForm.value, this.param1)
 
  .subscribe(
 response => console.log('Success!', response),
  )
}
  }



