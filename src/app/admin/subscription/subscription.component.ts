import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  disabled=false;
  ShowFilter=false;
  limitSelection=false;
  clients: any=[];
  //selectedItems: any=[];
  dropdownSettings:any={};
  selectedItems: any = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
  
  ];


  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
    
  ) {}

  ngOnInit() {
      this.registrationForm = this.formBuilder.group({
    
            invoice: ['',Validators.required],
            sale:['',Validators.required],
            client: [this.selectedItems]
          
      });
      debugger
      this.selectedItems = [];
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.clients=[
        {id:1,client_name:'Akash'},
        
        {id:2,client_name:'Jasjot'},
        
        {id:3,client_name:'Navdeep'},
        
        {id:4,client_name:'Gaurav'},
      ];

      this.selectedItems=[];
      this.dropdownSettings={
        singleSelection:false,
        idField:'id',
          textField:'client_name',
          selectAllText:'Select All',
          unSelectAllText:'Unselect All',
            itemsShowLimit:4,
            allowSearchFilter:this.ShowFilter
      };
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit()  {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
  alert("Success");
  
}
onItemSelect(client_name:any){
    this.selectedItems.push(client_name);
  console.log(this.selectedItems);
}
add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.fruits.push({name: value.trim()});
    console.log(this.fruits);
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(fruit : Fruit): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}
}
